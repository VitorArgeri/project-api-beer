'use client';
import { useState } from 'react';
import styles from './contato.module.css';
import LinkButton from '../../Components/LinkButton/page';

export default function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // Simular envio do formulário
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setSubmitMessage('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                assunto: '',
                mensagem: ''
            });
        } catch (error) {
            setSubmitMessage('❌ Erro ao enviar mensagem. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>📧 Entre em Contato</h1>
                <p className={styles.subtitle}>
                    Tem dúvidas sobre nossa API de cervejas? Sugestões? Fale conosco!
                </p>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.infoSection}>
                    <div className={styles.infoCard}>
                        <h3 className={styles.infoTitle}>🏢 Informações de Contato</h3>
                        
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📧</span>
                            <div>
                                <strong>Email:</strong>
                                <p>vitor.argeri@email.com</p>
                            </div>
                        </div>
                        
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📱</span>
                            <div>
                                <strong>Telefone:</strong>
                                <p>(19) 9999-9999</p>
                            </div>
                        </div>
                        
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📍</span>
                            <div>
                                <strong>Localização:</strong>
                                <p>Valinhos, SP - Brasil</p>
                            </div>
                        </div>
                        
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>🕒</span>
                            <div>
                                <strong>Horário de Atendimento:</strong>
                                <p>Segunda a Sexta: 9h às 18h</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socialSection}>
                        <h4 className={styles.socialTitle}>🌐 Redes Sociais</h4>
                        <div className={styles.socialLinks}>
                            <a href="https://github.com/VitorArgeri" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                🐙 GitHub
                            </a>
                            <a href="https://linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                💼 LinkedIn
                            </a>
                            <a href="mailto:vitor.argeri@email.com" className={styles.socialLink}>
                                📧 Email Direto
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <h3 className={styles.formTitle}>💬 Envie sua Mensagem</h3>
                        
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="nome" className={styles.label}>
                                    👤 Nome Completo *
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="Seu nome completo"
                                />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    📧 Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="telefone" className={styles.label}>
                                    📱 Telefone
                                </label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="(11) 99999-9999"
                                />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="assunto" className={styles.label}>
                                    🏷️ Assunto *
                                </label>
                                <select
                                    id="assunto"
                                    name="assunto"
                                    value={formData.assunto}
                                    onChange={handleChange}
                                    required
                                    className={styles.select}
                                >
                                    <option value="">Selecione um assunto</option>
                                    <option value="duvida">Dúvida sobre a API</option>
                                    <option value="sugestao">Sugestão</option>
                                    <option value="erro">Reportar Erro</option>
                                    <option value="parceria">Parceria</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="mensagem" className={styles.label}>
                                💭 Mensagem *
                            </label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                required
                                rows={6}
                                className={styles.textarea}
                                placeholder="Descreva sua mensagem detalhadamente..."
                            />
                        </div>

                        <div className={styles.submitSection}>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={styles.submitButton}
                            >
                                {isSubmitting ? '⏳ Enviando...' : '🚀 Enviar Mensagem'}
                            </button>
                            
                            {submitMessage && (
                                <div className={`${styles.message} ${
                                    submitMessage.includes('sucesso') ? styles.success : styles.error
                                }`}>
                                    {submitMessage}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <div className={styles.backSection}>
                <LinkButton link="/" text="🏠 Voltar ao Início" variant="outline" />
                <LinkButton link="/List" text="🍻 Ver Cervejas" variant="primary" />
            </div>
        </div>
    );
}
