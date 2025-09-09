"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import styles from './list.module.css'
import Link from "@/Components/LinkButton/page"
import NextLink from 'next/link'

export default function Page() {
    const [bebidas, setBebidas] = useState([])
    const [loading, setLoading] = useState(false)
    const [imagensErro, setImagensErro] = useState(new Set())

    const buscarBebidas = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://api.sampleapis.com/beers/ale')
            const data = response.data;
            setBebidas(data)
            setImagensErro(new Set()) // Reset dos erros de imagem
            console.table(data)
        } catch (error) {
            console.error('Erro ao buscar bebidas:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleImageError = (bebidaId) => {
        setImagensErro(prev => new Set(prev).add(bebidaId))
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lista de Bebidas</h1>
            <p className={styles.description}>Nesta página você irá encontrar uma lista com todas bebidas presentes na API</p>

            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={buscarBebidas} disabled={loading}>
                    {loading ? "Carregando..." : "Buscar Bebidas"}
                </button>
            </div>

            <div className={styles.heroSection}>
                {bebidas.slice(0, -2).map((bebida, index) => (
                    <div className={styles.drinksItem} key={bebida.id}>
                        <h3 className={styles.drinkName}>{bebida.name}</h3>
                        <p className={styles.drinkPrice}><span className={styles.bold}>Preço</span>: {bebida.price}</p>
                        <div className={styles.imageContainer}>
                            {imagensErro.has(bebida.id) ? (
                                <div className={styles.emojiContainer}>
                                    <span className={styles.beerEmoji}>🍺</span>
                                </div>
                            ) : (
                                <img 
                                    src={bebida.image} 
                                    alt="Imagem da Bebida" 
                                    className={styles.drinkImage}
                                    onError={() => handleImageError(bebida.id)}
                                />
                            )}
                        </div>
                        <div className={styles.linkContainer}>
                            <NextLink href={`/${index}`} className={styles.detailLink}>
                                Ver Detalhes 🔍
                            </NextLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
