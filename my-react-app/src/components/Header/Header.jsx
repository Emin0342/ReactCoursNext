import styles from './Header.module.css';

function Header() {

    return (
        // header de l'app avec le titre 

        <div className={styles.header}>
            <h2 className={styles.title}>React Header</h2>
            <h2 className={styles.title}>Deuxieme Header</h2>
            <h2 className={styles.title}>3eme Header</h2>
        </div>
    )
}

export default Header;