import { createJWT, getNumericDate, json, verifyJWT } from "../../deps.ts";
import { queryAuthInfo } from "./database.ts";
import { importKey, auth_client, dc_oauth2_enable } from "./utils.ts";

export async function auth(req: Request) {
  if (!dc_oauth2_enable)
    return new Response("OAuth feature not enabled", { status: 500 });

  const params = new URL(req.url).searchParams;
  const appid = params.get("app_id");
  const redirect = params.get("redirect");

  if (!appid || !redirect) return new Response("Bad Request", { status: 400 });

  const auth_info = await queryAuthInfo(Number(appid));
  if (!auth_info) return new Response("App not found", { status: 404 });

  const key = await importKey();
  const jwt = await createJWT(
    { alg: "HS512", typ: "JWT" },
    {
      exp: getNumericDate(60 * 10),
      nbf: getNumericDate(0),
      app_id: Number(appid),
      callback: auth_info.callback,
      redirect,
    },
    key
  );
  const url = auth_client.code.getAuthorizationUri({ state: jwt });
  return Response.redirect(url.toString(), 302);
}

export async function callback(req: Request) {
  if (!dc_oauth2_enable)
    return new Response("OAuth feature not enabled", { status: 500 });

  const params = new URL(req.url).searchParams;
  const jwt = params.get("state")!;
  const key = await importKey();
  const payload = await verifyJWT(jwt, key);

  const appid = payload.app_id as number;
  const callback = payload.callback as string;
  const redirect = payload.redirect as string;

  const token = await auth_client.code.getToken(req.url);
  const info = await fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${token.accessToken}` },
  }).then((resp) => resp.json());
  const connections = await fetch(
    "https://discord.com/api/users/@me/connections",
    {
      headers: { Authorization: `Bearer ${token.accessToken}` },
    }
  ).then((resp) => resp.json());
  info["connections"] = connections;

  const auth_info = await queryAuthInfo(Number(appid));
  if (!auth_info) return new Response("App not found", { status: 404 });

  const resp = await fetch(callback, {
    method: "POST",
    body: JSON.stringify({
      app_id: payload.app_id,
      app_secret: auth_info.app_secret,
      info,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const result = await resp.json();
  if (resp.status !== 200) return json(result, { status: resp.status });

  const p = new URLSearchParams();
  for (const key in result) p.append(key, result[key]);
  return Response.redirect(`${redirect}?${p.toString()}`);
}
