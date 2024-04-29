'use client'

import { Button } from '@/components/Button'
import { FlexBox } from '@/components/FlexBox'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { Input } from '@/components/Input'

type User = {
  id: string
  name: string
  email: string
}

const createUser = (data: Omit<User, 'id'>) =>
  fetch('/api/users', {
    method: 'post',
    body: JSON.stringify(data),
  })
const getUsers = () => fetch('/api/users')
const updateUser = (data: User) =>
  fetch('/api/users', {
    method: 'put',
    body: JSON.stringify(data),
  })
const deleteUser = (data: Pick<User, 'id'>) =>
  fetch(`/api/users?id=${data.id}`, {
    method: 'delete',
  })

export default function Page() {
  const [users, setUsers] = useState<User[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    getUsers().then(async (res) => {
      const data = await res.json()
      setUsers(data)
    })
  }, [setUsers])

  return (
    <main>
      <FlexBox flexDirection='column'>
        <Button type='button' onClick={() => setModalOpen(true)}>
          ユーザー作成
        </Button>
        <table>
          <thead>
            <tr>
              <th className={styles.header}>Id</th>
              <th className={styles.header}>Name</th>
              <th className={styles.header}>Email</th>
              <th className={styles.header}>Menu</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button type='button'>編集</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </FlexBox>
      {modalOpen && (
        <div>
          <form
            action={async (formData) => {
              const name = formData.get('name')?.toString()
              const email = formData.get('email')?.toString()
              console.log(name, email)
              if (!name || !email) return
              await createUser({ name, email })
              const newUsers = await getUsers().then((res) => res.json())
              setUsers(newUsers)
              setModalOpen(false)
            }}
          >
            <FlexBox flexDirection='column' gap='1rem'>
              <Input label='name' name='name' />
              <Input label='email' name='email' />
              <Button type='submit'>作成</Button>
              <Button type='button' onClick={() => setModalOpen(false)}>
                戻る
              </Button>
            </FlexBox>
          </form>
        </div>
      )}
    </main>
  )
}
