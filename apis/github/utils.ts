export function headersAddToken(headers: Record<string, string>) {
  const token = Deno.env.get("GITHUB_TOKEN");
  if (token) headers["Authorization"] = `token ${token}`;
  return headers;
}
