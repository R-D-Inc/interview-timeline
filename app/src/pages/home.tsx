import { NextPage } from "next";
import { Menu } from "../components/organisms/Menu";
import styles from '../styles/HomePage.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.layout}>
            <Menu />
            <div className={styles.center}>
                <div>
                    今どうしてる
                </div>
            </div>
        </div>
    )
}

export default Home
