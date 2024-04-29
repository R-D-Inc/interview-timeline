import { isInsertableUser, isUpdatableUser } from '@/types/User.types'
import { db } from '../utils/db'

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const sql = id !== null ? `SELECT * FROM users WHERE id = ${id}` : 'SELECT * FROM users'
  const rows = await new Promise((resolve, reject) => {
    db.all(sql, (e, r) => {
      if (e) {
        reject(e)
      }
      resolve(r)
    })
  })
  return Response.json(rows)
}

export async function POST(request: Request) {
  const body = (await request.json()) as unknown
  if (!isInsertableUser(body)) {
    return Response.error()
  }
  const data = [body.name, body.email]
  const sql = `
    INSERT INTO users (name, email)
    VALUES (?, ?)`
  await new Promise((resolve, _) => {
    db.run(sql, data, () => [resolve(undefined)])
  })
  return new Response(undefined, {
    status: 200,
  })
}

export async function PUT(request: Request) {
  const body = (await request.json()) as unknown
  if (!isUpdatableUser(body)) {
    return Response.error()
  }
  const data = [body.name, body.email, body.id]
  const sql = `
    UPDATE users
    SET name = ?, email = ?
    WHERE id = ?`
  await new Promise((resolve, _) => {
    db.run(sql, data, () => [resolve(undefined)])
  })
  return new Response(undefined, {
    status: 200,
  })
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (id === null) return Response.error()
  const data = [id]
  const sql = `
    DELETE FROM users
    WHERE id = ?`
  await new Promise((resolve, _) => {
    db.run(sql, data, () => [resolve(undefined)])
  })
  return new Response(undefined, {
    status: 200,
  })
}
