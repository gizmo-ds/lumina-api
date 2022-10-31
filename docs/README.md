# GitHub

## Get the latest release

> `GET` /gh/repos/{owner}/{repo}/releases/latest

### Path parameters <!-- {docsify-ignore} -->

| Name  | Type     | Required | Description                                                          |
| ----- | -------- | -------- | -------------------------------------------------------------------- |
| owner | `string` | yes      | The account owner of the repository. The name is not case sensitive. |
| repo  | `string` | yes      | The name of the repository. The name is not case sensitive.          |

### Code samples <!-- {docsify-ignore} -->

```javascript
const release = await fetch(
  "https://api.lumina.moe/gh/repos/gizmo-ds/vrchat-cache-mover/releases/latest"
).then((resp) => resp.json());
console.log(release.tag_name);
```

### Response <!-- {docsify-ignore} -->

<details>
<summary>Example response</summary>

```json
{
  "url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/79582820",
  "assets_url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/79582820/assets",
  "upload_url": "https://uploads.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/79582820/assets{?name,label}",
  "html_url": "https://github.com/gizmo-ds/vrchat-cache-mover/releases/tag/v1.2.6",
  "id": 79582820,
  "author": {
    "login": "github-actions[bot]",
    "id": 41898282,
    "node_id": "MDM6Qm90NDE4OTgyODI=",
    "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/github-actions%5Bbot%5D",
    "html_url": "https://github.com/apps/github-actions",
    "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
    "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
    "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
    "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
    "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
    "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
    "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
    "type": "Bot",
    "site_admin": false
  },
  "node_id": "RE_kwDOHJ0jSc4EvlZk",
  "tag_name": "v1.2.6",
  "target_commitish": "main",
  "name": "v1.2.6",
  "draft": false,
  "prerelease": false,
  "created_at": "2022-10-11T21:24:02Z",
  "published_at": "2022-10-11T21:36:46Z",
  "assets": [
    {
      "url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/assets/80696282",
      "id": 80696282,
      "node_id": "RA_kwDOHJ0jSc4Ez1Pa",
      "name": "checksums.txt",
      "label": "",
      "uploader": {
        "login": "github-actions[bot]",
        "id": 41898282,
        "node_id": "MDM6Qm90NDE4OTgyODI=",
        "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/github-actions%5Bbot%5D",
        "html_url": "https://github.com/apps/github-actions",
        "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
        "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
        "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
        "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
        "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
        "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
        "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
        "type": "Bot",
        "site_admin": false
      },
      "content_type": "text/plain",
      "state": "uploaded",
      "size": 89,
      "download_count": 2,
      "created_at": "2022-10-11T21:36:47Z",
      "updated_at": "2022-10-11T21:36:47Z",
      "browser_download_url": "https://github.com/gizmo-ds/vrchat-cache-mover/releases/download/v1.2.6/checksums.txt"
    },
    {
      "url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/assets/80696283",
      "id": 80696283,
      "node_id": "RA_kwDOHJ0jSc4Ez1Pb",
      "name": "vrchat-cache-mover.zip",
      "label": "",
      "uploader": {
        "login": "github-actions[bot]",
        "id": 41898282,
        "node_id": "MDM6Qm90NDE4OTgyODI=",
        "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/github-actions%5Bbot%5D",
        "html_url": "https://github.com/apps/github-actions",
        "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
        "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
        "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
        "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
        "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
        "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
        "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
        "type": "Bot",
        "site_admin": false
      },
      "content_type": "application/zip",
      "state": "uploaded",
      "size": 1233730,
      "download_count": 149,
      "created_at": "2022-10-11T21:36:47Z",
      "updated_at": "2022-10-11T21:36:47Z",
      "browser_download_url": "https://github.com/gizmo-ds/vrchat-cache-mover/releases/download/v1.2.6/vrchat-cache-mover.zip"
    }
  ],
  "tarball_url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/tarball/v1.2.6",
  "zipball_url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/zipball/v1.2.6",
  "body": "## v1.2.6 (2022-10-12)\n\n### New feature:\n\n- 移动缓存添加提示([`d2d2035`](https://github.com/GizmoOAO/vrchat-cache-mover/commit/d2d20352a6f3476cf6e50562b0b66654c8ab5546))\n- 添加缓存过期和缓存大小配置([`202ba86`](https://github.com/GizmoOAO/vrchat-cache-mover/commit/202ba868bfbd1a668288709b58814fb82eef2415))\n- 拖拽添加提示([`1b10f61`](https://github.com/GizmoOAO/vrchat-cache-mover/commit/1b10f611db5d872ca9bd0bad758e59f95c359927))\n\n### Bugs fixed:\n\n- 拖拽非文件/文件夹不再显示拖拽提示([`40c2e8d`](https://github.com/GizmoOAO/vrchat-cache-mover/commit/40c2e8d8fd279dafdc3db112f69984b8e9154d1a))\n"
}
```

</details>

## Get a release by tag name

> `GET` /gh/repos/{owner}/{repo}/releases/tags/{tag}

### Path parameters <!-- {docsify-ignore} -->

| Name  | Type     | Required | Description                                                          |
| ----- | -------- | -------- | -------------------------------------------------------------------- |
| owner | `string` | yes      | The account owner of the repository. The name is not case sensitive. |
| repo  | `string` | yes      | The name of the repository. The name is not case sensitive.          |
| tag   | `string` | yes      | tag parameter                                                        |

### Code samples <!-- {docsify-ignore} -->

```javascript
const release = await fetch(
  "https://api.lumina.moe/gh/repos/gizmo-ds/vrchat-cache-mover/releases/tags/v1.2.5"
).then((resp) => resp.json());
console.log(release.tag_name);
```

### Response <!-- {docsify-ignore} -->

<details>
<summary>Example response</summary>

```json
{
  "url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/72365247",
  "assets_url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/72365247/assets",
  "upload_url": "https://uploads.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/72365247/assets{?name,label}",
  "html_url": "https://github.com/gizmo-ds/vrchat-cache-mover/releases/tag/v1.2.5",
  "id": 72365247,
  "author": {
    "login": "github-actions[bot]",
    "id": 41898282,
    "node_id": "MDM6Qm90NDE4OTgyODI=",
    "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/github-actions%5Bbot%5D",
    "html_url": "https://github.com/apps/github-actions",
    "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
    "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
    "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
    "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
    "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
    "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
    "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
    "type": "Bot",
    "site_admin": false
  },
  "node_id": "RE_kwDOHJ0jSc4EUDS_",
  "tag_name": "v1.2.5",
  "target_commitish": "main",
  "name": "v1.2.5",
  "draft": false,
  "prerelease": false,
  "created_at": "2022-07-19T19:38:37Z",
  "published_at": "2022-07-19T19:50:56Z",
  "assets": [
    {
      "url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/assets/72062183",
      "id": 72062183,
      "node_id": "RA_kwDOHJ0jSc4ES5Tn",
      "name": "checksums.txt",
      "label": "",
      "uploader": {
        "login": "github-actions[bot]",
        "id": 41898282,
        "node_id": "MDM6Qm90NDE4OTgyODI=",
        "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/github-actions%5Bbot%5D",
        "html_url": "https://github.com/apps/github-actions",
        "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
        "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
        "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
        "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
        "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
        "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
        "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
        "type": "Bot",
        "site_admin": false
      },
      "content_type": "text/plain",
      "state": "uploaded",
      "size": 89,
      "download_count": 4,
      "created_at": "2022-07-19T19:50:56Z",
      "updated_at": "2022-07-19T19:50:57Z",
      "browser_download_url": "https://github.com/gizmo-ds/vrchat-cache-mover/releases/download/v1.2.5/checksums.txt"
    },
    {
      "url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/assets/72062184",
      "id": 72062184,
      "node_id": "RA_kwDOHJ0jSc4ES5To",
      "name": "vrchat-cache-mover.zip",
      "label": "",
      "uploader": {
        "login": "github-actions[bot]",
        "id": 41898282,
        "node_id": "MDM6Qm90NDE4OTgyODI=",
        "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/github-actions%5Bbot%5D",
        "html_url": "https://github.com/apps/github-actions",
        "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
        "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
        "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
        "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
        "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
        "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
        "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
        "type": "Bot",
        "site_admin": false
      },
      "content_type": "application/zip",
      "state": "uploaded",
      "size": 1234047,
      "download_count": 796,
      "created_at": "2022-07-19T19:50:56Z",
      "updated_at": "2022-07-19T19:50:57Z",
      "browser_download_url": "https://github.com/gizmo-ds/vrchat-cache-mover/releases/download/v1.2.5/vrchat-cache-mover.zip"
    }
  ],
  "tarball_url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/tarball/v1.2.5",
  "zipball_url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/zipball/v1.2.5",
  "body": "## v1.2.5 (2022-07-20)\n\n### New feature:\n\n- GitHub链接从package.json获取([`b81d8a6`](https://github.com/GizmoOAO/vrchat-cache-mover/commit/b81d8a6326dea98a447b485ba2203d4e182e116e))\n\n### Bugs fixed:\n\n- `config.json`不存在时的保存失败([`a90ecaf`](https://github.com/GizmoOAO/vrchat-cache-mover/commit/a90ecaf8cd6263642362efc65f2225881a891b5b))\n"
}
```

</details>

## Get a release

> `GET` /gh/repos/{owner}/{repo}/releases/{release_id}

### Path parameters <!-- {docsify-ignore} -->

| Name       | Type      | Required | Description                                                          |
| ---------- | --------- | -------- | -------------------------------------------------------------------- |
| owner      | `string`  | yes      | The account owner of the repository. The name is not case sensitive. |
| repo       | `string`  | yes      | The name of the repository. The name is not case sensitive.          |
| release_id | `integer` | yes      | The unique identifier of the release.                                |

### Code samples <!-- {docsify-ignore} -->

```javascript
const release = await fetch(
  "https://api.lumina.moe/gh/repos/gizmo-ds/vrchat-cache-mover/releases/72365247"
).then((resp) => resp.json());
console.log(release.tag_name);
```

### Response <!-- {docsify-ignore} -->

<details>
<summary>Example response</summary>

```json
{
  "url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/72365247",
  "assets_url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/72365247/assets",
  "upload_url": "https://uploads.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/72365247/assets{?name,label}",
  "html_url": "https://github.com/gizmo-ds/vrchat-cache-mover/releases/tag/v1.2.5",
  "id": 72365247,
  "author": {
    "login": "github-actions[bot]",
    "id": 41898282,
    "node_id": "MDM6Qm90NDE4OTgyODI=",
    "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/github-actions%5Bbot%5D",
    "html_url": "https://github.com/apps/github-actions",
    "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
    "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
    "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
    "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
    "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
    "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
    "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
    "type": "Bot",
    "site_admin": false
  },
  "node_id": "RE_kwDOHJ0jSc4EUDS_",
  "tag_name": "v1.2.5",
  "target_commitish": "main",
  "name": "v1.2.5",
  "draft": false,
  "prerelease": false,
  "created_at": "2022-07-19T19:38:37Z",
  "published_at": "2022-07-19T19:50:56Z",
  "assets": [
    {
      "url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/assets/72062183",
      "id": 72062183,
      "node_id": "RA_kwDOHJ0jSc4ES5Tn",
      "name": "checksums.txt",
      "label": "",
      "uploader": {
        "login": "github-actions[bot]",
        "id": 41898282,
        "node_id": "MDM6Qm90NDE4OTgyODI=",
        "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/github-actions%5Bbot%5D",
        "html_url": "https://github.com/apps/github-actions",
        "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
        "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
        "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
        "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
        "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
        "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
        "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
        "type": "Bot",
        "site_admin": false
      },
      "content_type": "text/plain",
      "state": "uploaded",
      "size": 89,
      "download_count": 4,
      "created_at": "2022-07-19T19:50:56Z",
      "updated_at": "2022-07-19T19:50:57Z",
      "browser_download_url": "https://github.com/gizmo-ds/vrchat-cache-mover/releases/download/v1.2.5/checksums.txt"
    },
    {
      "url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/releases/assets/72062184",
      "id": 72062184,
      "node_id": "RA_kwDOHJ0jSc4ES5To",
      "name": "vrchat-cache-mover.zip",
      "label": "",
      "uploader": {
        "login": "github-actions[bot]",
        "id": 41898282,
        "node_id": "MDM6Qm90NDE4OTgyODI=",
        "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/github-actions%5Bbot%5D",
        "html_url": "https://github.com/apps/github-actions",
        "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
        "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
        "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
        "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
        "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
        "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
        "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
        "type": "Bot",
        "site_admin": false
      },
      "content_type": "application/zip",
      "state": "uploaded",
      "size": 1234047,
      "download_count": 796,
      "created_at": "2022-07-19T19:50:56Z",
      "updated_at": "2022-07-19T19:50:57Z",
      "browser_download_url": "https://github.com/gizmo-ds/vrchat-cache-mover/releases/download/v1.2.5/vrchat-cache-mover.zip"
    }
  ],
  "tarball_url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/tarball/v1.2.5",
  "zipball_url": "https://api.github.com/repos/gizmo-ds/vrchat-cache-mover/zipball/v1.2.5",
  "body": "## v1.2.5 (2022-07-20)\n\n### New feature:\n\n- GitHub链接从package.json获取([`b81d8a6`](https://github.com/GizmoOAO/vrchat-cache-mover/commit/b81d8a6326dea98a447b485ba2203d4e182e116e))\n\n### Bugs fixed:\n\n- `config.json`不存在时的保存失败([`a90ecaf`](https://github.com/GizmoOAO/vrchat-cache-mover/commit/a90ecaf8cd6263642362efc65f2225881a891b5b))\n"
}
```

</details>

# BOOTH

## Get shop profile

> `GET` /booth/shop/{subdomain}

### Path parameters <!-- {docsify-ignore} -->

| Name      | Type     | Required | Description               |
| --------- | -------- | -------- | ------------------------- |
| subdomain | `string` | yes      | Shop domain or subdomain. |

### Query parameters <!-- {docsify-ignore} -->

| Name | Type      | Required        | Description      |
| ---- | --------- | --------------- | ---------------- |
| page | `integer` | no `Default: 1` | Shop items page. |

### Code samples <!-- {docsify-ignore} -->

```javascript
const profile = await fetch(
  "https://api.lumina.moe/booth/shop/gizmooooo?page=1"
).then((resp) => resp.json());
console.log(profile.shopName);
```

### Response <!-- {docsify-ignore} -->

Example response

```json
{
  "shopName": "ギズモおおおお",
  "nickname": "Gizmo",
  "contacts": [
    { "title": "Twitter", "url": "https://twitter.com/gizmo_ds" },
    { "title": "GitHub", "url": "https://github.com/gizmo-ds" }
  ],
  "description": "",
  "page": 1,
  "items": [
    {
      "id": 4173039,
      "name": "【無料】VRChat Udon OTP Library",
      "thumb": "https://booth.pximg.net/c/300x300_a2_g5/cfe21c17-cc50-4eb4-b032-8692dea68452/i/4173039/2bc35cda-184e-4809-83fd-9e1f67b234e7_base_resized.jpg",
      "category": "3Dモデル（その他）",
      "price": "¥ 123~"
    },
    {
      "id": 3629671,
      "name": "【無料】あのん用のMMDShapeKeyを追加【UnityEditor拡張】",
      "thumb": "https://booth.pximg.net/c/300x300_a2_g5/cfe21c17-cc50-4eb4-b032-8692dea68452/i/3629671/632cd1ba-aa76-4566-abb8-158f6141ae46_base_resized.jpg",
      "category": "ソフトウェア",
      "price": "¥ 123~"
    },
    {
      "id": 3485608,
      "name": "【無料】SpriteFrame",
      "thumb": "https://booth.pximg.net/c/300x300_a2_g5/cfe21c17-cc50-4eb4-b032-8692dea68452/i/3485608/da2b7dd2-bcd8-4d23-8b6c-1176be59e359_base_resized.jpg",
      "category": "素材（その他）",
      "price": "¥ 123~"
    },
    {
      "id": 3435521,
      "name": "【無料】GrabSystem【UnityEditor拡張】",
      "thumb": "https://booth.pximg.net/c/300x300_a2_g5/cfe21c17-cc50-4eb4-b032-8692dea68452/i/3435521/25c82b10-dbfa-4e14-bbc9-76815a61b5a8_base_resized.jpg",
      "category": "ソフトウェア",
      "price": "¥ 123~"
    }
  ]
}
```

## Get items favorite

> `GET` /booth/items/favorite

### Query parameters <!-- {docsify-ignore} -->

| Name | Type     | Required | Description                 |
| ---- | -------- | -------- | --------------------------- |
| ids  | `string` | yes      | Items ids, separated by `,` |

### Code samples <!-- {docsify-ignore} -->

```javascript
const ids = [3629671, 3485608, 3435521, 3233177];
const profile = await fetch(
  `https://api.lumina.moe/booth/items/favorite?ids=${ids.join(",")}`
).then((resp) => resp.json());
```

### Response <!-- {docsify-ignore} -->

Example response

```json
{ "3233177": 47, "3435521": 171, "3485608": 267, "3629671": 182 }
```
