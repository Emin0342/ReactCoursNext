import styles from './TopNavBar.module.css';

function TopNavBar() {
    
        return (
            <>
            <div className={styles.topPositionnement}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li className={styles.dropdown}>
                        <div className={styles.dropdownContent}>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </li>
                </ul>
            </div>
            </> 
        )
    }

export default TopNavBar;