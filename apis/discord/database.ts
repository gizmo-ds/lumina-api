import { Pool, PoolClient } from "../../deps.ts";
import { DatabaseUri } from "../../utils/mod.ts";
import { AuthInfo } from "./types.ts";

let conn: PoolClient | undefined;

export async function queryAuthInfo(app_id: number) {
  const _conn = await connect();
  try {
    const result = await _conn.queryObject(
      `select * from "discord-auth" where app_id = ${app_id};`
    );
    if (!result.rowCount || result.rowCount <= 0) return undefined;
    return result.rows[0] as AuthInfo;
  } catch (_err) {
    return undefined;
  } finally {
    _conn.release();
  }
}

async function connect() {
  if (!conn) {
    const pool = new Pool(DatabaseUri!, 3, true);
    conn = await pool.connect();
  }
  return conn;
}
