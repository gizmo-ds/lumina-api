// deno-lint-ignore-file no-explicit-any
import { ConnInfo, json, PathParams, DOMParser } from "../../deps.ts";
import { cors_headers } from "../../utils/mod.ts";

interface ShopInfo {
  shopName: string;
  nickname: string;
  description: string;
  contacts: {
    title: string;
    url: string;
  }[];
  page: number;
  items: {
    id: number;
    name: string;
    thumb: string;
    category: string;
    price: string;
  }[];
}

export async function getShopInfo(
  req: Request,
  _conn: ConnInfo,
  params: PathParams
) {
  let { subdomain } = params ?? {};
  const page = new URL(req.url).searchParams.get("page");
  if (!subdomain)
    return new Response("Bad Request", { status: 400, headers: cors_headers });
  if (subdomain.indexOf("booth.pm") === -1) subdomain += ".booth.pm";

  const resp = await fetch(`https://${subdomain}/items?page=${page ?? 1}`, {
    redirect: "manual",
  });
  if (resp.status !== 200)
    return new Response(null, { status: 404, headers: cors_headers });

  const info: ShopInfo = {
    shopName: "",
    nickname: "",
    contacts: [],
    description: "",
    page: 1,
    items: [],
  };

  const body = await resp.text();

  const doc = new DOMParser().parseFromString(body, "text/html");
  if (!doc) return new Response(null, { status: 500, headers: cors_headers });
  info.shopName = doc.querySelector(".shop-name")?.textContent ?? "";
  info.nickname = doc.querySelector(".home-link-container")?.textContent ?? "";
  info.description =
    doc.querySelector(".booth-description>div")?.textContent ?? "";

  const last_page = doc.querySelector(".shop-pager li:last-child")?.firstChild;
  if (last_page) {
    const lp = last_page as any as Element;
    const l = lp.attributes.getNamedItem("href")?.value;
    const a = /page=([0-9]*)/.exec(l ?? "");
    if (a?.length === 2) info.page = Number(a[1]);
  }

  doc
    .querySelectorAll(".shop-contacts>.shop-contacts__link>a")
    .forEach((node) => {
      const _node: Element = node as any as Element;
      const attrs = _node.attributes;
      const contact = {
        title: attrs.getNamedItem("title")?.value ?? "",
        url: attrs.getNamedItem("href")?.value ?? "",
      };
      contact.url !== "/conversations" && info.contacts.push(contact);
    });
  doc.querySelectorAll(".item").forEach((node) => {
    if (node.childNodes.length !== 2) return;
    const _node: Element = node as any as Element;
    const item = {
      id:
        Number(
          _node
            .querySelector(".thumb>a")
            ?.attributes.getNamedItem("href")
            ?.value?.replace("/items/", "")
        ) ?? 0,
      name: _node.querySelector(".item-head>.item-name>a")?.innerHTML ?? "",
      thumb:
        _node.querySelector(".thumb img")?.attributes.getNamedItem("src")
          ?.value ?? "",
      category:
        _node.querySelector(".item-head>.item-category")?.innerHTML ?? "",
      price: _node.querySelector(".item-head .price")?.innerHTML ?? "",
    };
    info.items.push(item);
  });

  return json(info, { headers: cors_headers });
}

export async function getItemsFavorite(req: Request) {
  const ids = new URL(req.url).searchParams.get("ids")?.split(",");
  if (!ids || ids.length === 0 || ids[0] === "")
    return new Response("Bad Request", { status: 400, headers: cors_headers });

  const u = new URL("https://accounts.booth.pm/wish_lists.json");
  ids.forEach((id) => u.searchParams.append("item_ids[]", id));

  const info = await fetch(u.toString()).then((resp) => resp.json());
  return json(info.wishlists_counts, { headers: cors_headers });
}
