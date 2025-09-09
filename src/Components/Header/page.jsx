'use client';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>
                        🍺 API - Bebidas
                    </Link>
                </div>
                
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>
                        🏠 Início
                    </Link>
                    <Link href="/List" className={styles.navLink}>
                        🍻 Lista de Cervejas
                    </Link>
                    <Link href="/Api-Info" className={styles.navLink}>
                        ℹ️ API Info
                    </Link>
                    <Link href="/contato" className={styles.navLink}>
                        📧 Contato
                    </Link>
                </nav>
            </div>
        </header>
    );
}
