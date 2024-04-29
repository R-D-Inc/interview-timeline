import { mockUsers } from "../../mocks/users";
import { User } from "../../pages";

const fetchUsers = async (num: number, page: number): Promise<User[]> => {
    // const collectionRef = collection(db, "users");
    // const users: User[] = [];
    // const q = query(collectionRef, limit(num))
    // const usersSnapshot = await getDocs(q);
    // for (const userSnapshot of usersSnapshot.docs) {
    //     const user = { id: userSnapshot.id, ...userSnapshot.data() } as User  // fix me
    //     users.push(user);
    // }
    const users = await fetchMockUsers(num, page)
    return users
}

const fetchMockUsers = async (num: number, page: number): Promise<User[]> => {
    const idx = num * page
    await sleep(500)
    return mockUsers.slice(idx, idx + num)
}

const sleep = (msec: number): Promise<void> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, msec)
    })


export default fetchUsers
