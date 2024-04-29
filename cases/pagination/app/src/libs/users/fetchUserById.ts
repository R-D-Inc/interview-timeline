import { doc, getDoc } from "firebase/firestore";
import { mockUsers } from "../../mocks/users";
import { User } from "../../pages";

const fetchUserById = async (id: string): Promise<User> => {
    // const snapshot = await getDoc(doc(db, "users", id));
    // const user = {
    //     id: snapshot.id,
    //     ...snapshot.data(),
    // }
    const user = await fetchMockUserById(id)
    return user
}

const fetchMockUserById = async (id: string): Promise<User> => {
    await sleep(500)
    return mockUsers.find(user => user.id === id)
}

const sleep = (msec: number): Promise<void> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, msec)
    })

export default fetchUserById
