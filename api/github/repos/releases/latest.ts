import { ServerRequest } from 'https://deno.land/std@0.100.0/http/server.ts'

export default async (req: ServerRequest) => {
  if (req.method === 'OPTIONS') return req.respond({ status: 200 })
  const params = new URL(`http://localhost${req.url}`).searchParams
  const owner = params.get('owner'),
    repo = params.get('repo'),
    token = Deno.env.get('GITHUB_TOKEN')
  if (!owner || !repo) {
    return req.respond({ status: 400, statusText: '400 Bad Request' })
  }
  const headers = new Headers({
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${token}`,
  })
  if (token) headers.set('Authorization', `Bearer ${token}`)
  const resp = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
    {
      headers: headers,
    }
  )
  if (resp.status !== 200) {
    return req.respond({
      status: resp.status,
      statusText: resp.statusText,
    })
  }
  req.respond({
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    }),
    body: await resp.text(),
  })
}
