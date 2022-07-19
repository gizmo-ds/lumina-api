import { Routes } from "./deps.ts";
import {
  getLatestRelease,
  getReleaseByTagName,
  getRelease,
} from "./apis/github/mod.ts";
import { getShopInfo, getItemsFavorite } from "./apis/booth/mod.ts";
import { auth, callback } from "./apis/discord/mod.ts";

const routers: Routes = {
  "/": (req) =>
    new Response(
      `Hello ${new URL(req.url).searchParams.get("name") ?? "World"} ❤️`
    ),

  "/gh/repos/:owner/:repo/releases/:release_id": getRelease,
  "/gh/repos/:owner/:repo/releases/latest": getLatestRelease,
  "/gh/repos/:owner/:repo/releases/tags/:tag": getReleaseByTagName,

  "/booth/shop/:subdomain": getShopInfo,
  "/booth/items/favorite": getItemsFavorite,

  "/dc/auth": auth,
  "/dc/auth/callback": callback,
};

export default routers;
