'use client';
import Link from 'next/link';
import styles from './linkButton.module.css';

export default function LinkButton({ link, text, variant = 'primary' }) {
    return (
        <Link href={link} className={`${styles.linkButton} ${styles[variant]}`}>
            {text}
        </Link>
    );
}
