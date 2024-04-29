type Role = 'owner' | 'writer' | 'reader'
type Administrator = {
    id: number
    name: string
    role: Role
}

export const useMe = (role: Role = 'writer'): Administrator => {
    return {
        id: 1,
        name: 'admin001',
        role,
    }
}
