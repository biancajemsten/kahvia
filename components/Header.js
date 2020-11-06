import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
                    <div className={styles.header__inner}>
                            <p>Hotel Name</p>
                            <Link href="/">
                            <Image
                            src="/PauligLogo.png"
                            alt="Paulig Logo"
                            width={300}
                            height={150}
                            />
                            </Link>
                    </div>
    </header>
    )
  }