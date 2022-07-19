import { ConnInfo, PathParams, json } from "../../deps.ts";
import { cors_headers } from "../../utils/mod.ts";
import { headersAddToken } from "./utils.ts";

export async function getLatestRelease(
  _req: Request,
  _conn: ConnInfo,
  params: PathParams
) {
  const { owner, repo } = params ?? {};
  const resp = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
    {
      headers: headersAddToken({ Accept: "application/vnd.github+json" }),
    }
  );
  if (resp.status !== 200) return new Response(null, { status: resp.status });
  return json(await resp.json(), { headers: cors_headers });
}

export async function getReleaseByTagName(
  _req: Request,
  _conn: ConnInfo,
  params: PathParams
) {
  const { owner, repo, tag } = params ?? {};
  const resp = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/tags/${tag}`,
    {
      headers: headersAddToken({ Accept: "application/vnd.github+json" }),
    }
  );
  if (resp.status !== 200) return new Response(null, { status: resp.status });
  return json(await resp.json(), { headers: cors_headers });
}

export async function getRelease(
  _req: Request,
  _conn: ConnInfo,
  params: PathParams
) {
  const { owner, repo, release_id } = params ?? {};
  const resp = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/${release_id}`,
    {
      headers: headersAddToken({ Accept: "application/vnd.github+json" }),
    }
  );
  if (resp.status !== 200) return new Response(null, { status: resp.status });
  return json(await resp.json(), { headers: cors_headers });
}
