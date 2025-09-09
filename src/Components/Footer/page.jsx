'use client';
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.logoSection}>
                        <h3 className={styles.footerLogo}>🍺 Bebidas - API</h3>
                        <p className={styles.description}>
                            Explore o mundo das cervejas artesanais com nossa API completa.
                        </p>
                    </div>
                    
                    <div className={styles.linksSection}>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>Navegação</h4>
                            <Link href="/" className={styles.footerLink}>Início</Link>
                            <Link href="/List" className={styles.footerLink}>Lista de Cervejas</Link>
                            <Link href="/Api-Info" className={styles.footerLink}>API Info</Link>
                            <Link href="/contato" className={styles.footerLink}>Contato</Link>
                        </div>
                        
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>Contato</h4>
                            <a href="mailto:vitor.argeri@gmail.com" className={styles.footerLink}>Email</a>
                            <a href="https://github.com/VitorArgeri" className={styles.footerLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://linkedin.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
                
                <div className={styles.bottomSection}>
                    <div className={styles.divider}></div>
                    <div className={styles.bottomContent}>
                        <p className={styles.copyright}>
                            © {currentYear} Vitor de Almeida Argeri. Todos os direitos reservados.
                        </p>
                        <div className={styles.socialLinks}>
                            <span className={styles.socialIcon}>🐙</span>
                            <span className={styles.socialIcon}>💼</span>
                            <span className={styles.socialIcon}>📧</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
