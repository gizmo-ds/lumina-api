import { OAuth2Client } from "../../deps.ts";
import { DatabaseUri } from "../../utils/mod.ts";

const DC_OAUTH2_ENVS = {
  JWT_Secret: Deno.env.get("DC_OAUTH2_JWT_SECRET"),
  ClientID: Deno.env.get("DC_OAUTH2_CLIENT_ID"),
  ClientSecret: Deno.env.get("DC_OAUTH2_CLIENT_SECRET"),
  RedirectUri: Deno.env.get("DC_OAUTH2_REDIRECT"),
};

export const dc_oauth2_enable = !!(
  DC_OAUTH2_ENVS.ClientID &&
  DC_OAUTH2_ENVS.ClientSecret &&
  DC_OAUTH2_ENVS.JWT_Secret &&
  DC_OAUTH2_ENVS.RedirectUri &&
  DatabaseUri
);

export const auth_client = new OAuth2Client({
  clientId: DC_OAUTH2_ENVS.ClientID!,
  clientSecret: DC_OAUTH2_ENVS.ClientSecret!,
  authorizationEndpointUri: "https://discord.com/api/oauth2/authorize",
  tokenUri: "https://discord.com/api/oauth2/token",
  redirectUri: `${DC_OAUTH2_ENVS.RedirectUri}/dc/auth/callback`,
  defaults: { scope: "identify connections" },
});

export async function importKey() {
  return await crypto.subtle.importKey(
    "jwk",
    {
      kty: "oct",
      k: DC_OAUTH2_ENVS.JWT_Secret!,
      alg: "HS512",
      key_ops: ["sign", "verify"],
      ext: true,
    },
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"]
  );
}
