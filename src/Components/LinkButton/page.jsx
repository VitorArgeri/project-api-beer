import React from "react";
import styles from "./linkButton.module.css";

export default function LinkButton({ link, text }) {
    return (
        <a href={link} className={styles.linkButton}>{text}</a>
    )
}
