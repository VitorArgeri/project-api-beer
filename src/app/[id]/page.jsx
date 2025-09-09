'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import styles from './beer-detail.module.css';
import LinkButton from '../../Components/LinkButton/page';

export default function BeerDetail() {
    const params = useParams();
    const [beer, setBeer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const fetchBeer = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://api.sampleapis.com/beers/ale');
                const beers = response.data;
                
                // Buscar cerveja pelo ID (índice do array)
                const beerIndex = parseInt(params.id);
                if (beerIndex >= 0 && beerIndex < beers.length) {
                    setBeer(beers[beerIndex]);
                } else {
                    setError('Cerveja não encontrada');
                }
            } catch (err) {
                setError('Erro ao carregar dados da cerveja');
                console.error('Erro:', err);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchBeer();
        }
    }, [params.id]);

    const handleImageError = () => {
        setImageError(true);
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingContainer}>
                    <div className={styles.loadingSpinner}></div>
                    <p className={styles.loadingText}>Carregando informações da cerveja...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <div className={styles.errorContainer}>
                    <h1 className={styles.errorTitle}>❌ Ops!</h1>
                    <p className={styles.errorMessage}>{error}</p>
                    <LinkButton link="/List" text="← Voltar para Lista" variant="primary" />
                </div>
            </div>
        );
    }

    if (!beer) {
        return (
            <div className={styles.container}>
                <div className={styles.errorContainer}>
                    <h1 className={styles.errorTitle}>🍺 Cerveja não encontrada</h1>
                    <p className={styles.errorMessage}>A cerveja que você está procurando não existe.</p>
                    <LinkButton link="/List" text="← Voltar para Lista" variant="primary" />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.beerCard}>
                <div className={styles.headerSection}>
                    <LinkButton link="/List" text="← Voltar" variant="outline" />
                    <h1 className={styles.beerTitle}>{beer.name}</h1>
                </div>

                <div className={styles.contentSection}>
                    <div className={styles.imageSection}>
                        {!imageError ? (
                            <img 
                                src={beer.image} 
                                alt={beer.name}
                                className={styles.beerImage}
                                onError={handleImageError}
                            />
                        ) : (
                            <div className={styles.emojiContainer}>
                                <span className={styles.beerEmoji}>🍺</span>
                            </div>
                        )}
                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>💰 Preço:</span>
                                <span className={styles.infoValue}>{beer.price}</span>
                            </div>
                            
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>⭐ Avaliação:</span>
                                <span className={styles.infoValue}>
                                    {beer.rating ? `${beer.rating.average}/5 (${beer.rating.reviews} reviews)` : 'Não avaliado'}
                                </span>
                            </div>
                            
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>🏷️ ID:</span>
                                <span className={styles.infoValue}>#{params.id}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionSection}>
                            <h3 className={styles.sectionTitle}>📝 Sobre esta cerveja</h3>
                            <p className={styles.description}>
                                {beer.name} é uma cerveja ale premium com características únicas. 
                                Com preço de {beer.price}, oferece uma experiência excepcional para 
                                apreciadores de cervejas artesanais.
                            </p>
                        </div>

                        <div className={styles.actionButtons}>
                            <LinkButton link="/List" text="🍻 Ver Outras Cervejas" variant="primary" />
                            <LinkButton link="/Api-Info" text="ℹ️ Sobre a API" variant="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
