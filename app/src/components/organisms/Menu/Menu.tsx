import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div className={styles.container}>
            <div>ホーム</div>
            <div>コミュニティ</div>
            <div>通知</div>
            <div>メッセージ</div>
            <div>ブックマーク</div>
            <div>プロフィール</div>
            <div>もっとみる</div>
        </div>
    )
}

export default Menu
