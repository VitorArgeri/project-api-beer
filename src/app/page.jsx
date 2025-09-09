import React from 'react'
import LinkButton from '../Components/LinkButton/page'
import styles from './page.module.css'

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.headerSection}>
          <img 
            src="/Img/VitorArgeri-Img.jpg" 
            alt="Foto do Vitor de Almeida Argeri" 
            className={styles.profileImage}
          />
          <h1 className={styles.profileName}>Vitor de Almeida Argeri</h1>
        </div>
        
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Turma:</span>
            <span className={styles.infoValue}>3ºD</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Idade:</span>
            <span className={styles.infoValue}>18 Anos</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Local de Nascimento:</span>
            <span className={styles.infoValue}>Valinhos, SP</span>
          </div>
        </div>
        
        <div className={styles.quote}>
          "A grandeza de uma pessoa é medida pelo quão grande seu sonho é"
        </div>
        
        <div className={styles.buttonSection}>
          <LinkButton link="/List" text="🍻 Ver Lista de Cervejas" variant="primary" />
          <LinkButton link="/Api-Info" text="ℹ️ Informações da API" variant="secondary" />
        </div>
      </div>
    </div>
  )
}
