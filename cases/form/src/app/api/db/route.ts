import { db } from '../utils/db'

export async function POST(request: Request) {
  db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
)
`)
  return new Response(undefined, {
    status: 200,
  })
}
