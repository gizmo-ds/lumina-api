import { ServerRequest } from 'https://deno.land/std@0.100.0/http/server.ts'
import {
  DOMParser,
  NamedNodeMap,
} from 'https://deno.land/x/deno_dom@v0.1.12-alpha/deno-dom-wasm.ts'

interface booth {
  shopName: string
  nickname: string
  description: string
  contacts: contact[]
}
interface contact {
  title: string
  url: string
}

export default async (req: ServerRequest) => {
  if (req.method === 'OPTIONS') return req.respond({ status: 200 })
  const params = new URL(`http://localhost${req.url}`).searchParams
  let shop = params.get('name')
  if (!shop) {
    return req.respond({ status: 400, statusText: '400 Bad Request' })
  }
  if (shop.indexOf('booth.pm') === -1) shop += '.booth.pm'
  const resp = await fetch('https://' + shop).catch(() => undefined)
  if (!resp) return req.respond({ status: 500 })
  const info: booth = {
    shopName: '',
    nickname: '',
    description: '',
    contacts: [],
  }

  resp.text().then((html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    if (!doc) {
      return req.respond({ status: 500 })
    }
    info.shopName = doc.querySelector('.shop-name')?.textContent ?? ''
    info.nickname = doc.querySelector('.home-link-container')?.textContent ?? ''
    info.description =
      doc.querySelector('.booth-description>div')?.textContent ?? ''
    doc
      .querySelectorAll('.shop-contacts>.shop-contacts__link>a')
      .forEach((node) => {
        // @ts-ignore: attributes
        const attrs: NamedNodeMap = node.attributes
        info.contacts.push({
          title: attrs.getNamedItem('title').value ?? '',
          url: attrs.getNamedItem('href').value ?? '',
        })
      })

    req.respond({
      status: 200,
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
      }),
      body: JSON.stringify(info),
    })
  })
}
