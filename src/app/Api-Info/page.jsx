import React from "react";
import styles from "./api-info.module.css";
import Link from "@/Components/LinkButton/page";

export default function APIInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <h1 className={styles.title}>Sobre a API</h1>
                <p className={styles.description}>
                    Esta aplicação utiliza a API pública da SAMPLE APIs, que fornece dados detalhados sobre diversas cervejas artesanais. A API é gratuita e de fácil acesso, permitindo que desenvolvedores integrem informações sobre cervejas em suas aplicações.
                </p>
                <h2 className={styles.subtitle}>Recursos da API</h2>
                <ul className={styles.featuresList}>
                    <li className={styles.listItem}>Busca por nome e preço</li>
                    <li className={styles.listItem}>Detalhes completos sobre cada cerveja</li>
                    <li className={styles.listItem}>Imagem de cada uma</li>
                </ul>
                <h2 className={styles.subtitle}>Documentação</h2>
                <p className={styles.description}>
                    Para mais informações sobre a API, incluindo endpoints disponíveis e exemplos de uso, visite a documentação oficial em <a href="https://punkapi.com/documentation/v2" className={styles.link} target="_blank" rel="
                    noopener noreferrer">https://punkapi.com/documentation/v2</a>.
                </p>
            </div>
        </div>
    );
}
