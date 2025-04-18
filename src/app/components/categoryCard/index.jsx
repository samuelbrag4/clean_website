import styles from "./category_card.module.css";
import Link from 'next/link';

const CategoryCard = () => {
    return (
        <section className={styles.categoria}>
            <div className={styles.degrade}></div>
            <nav className={styles.cards}>
                <Link href="/skincare" className={styles.navLink}>
                    <div className={styles.card}>
                        <div className={styles.titulo}>
                            <h1 className={styles.tituloCard}>Página de Skincare</h1>
                            <h2 className={styles.numberCard}>1</h2>
                        </div>
                        <p className={styles.cardTexto}>
                            O que não pode faltar no skincare? Os passos básicos de uma rotina de skincare simples são: higienização, tonificação, hidratação e proteção solar.
                        </p>
                    </div>
                </Link>
                <Link href="/body" className={styles.navLink}>
                    <div className={styles.card}>
                        <div className={styles.titulo}>
                            <h1 className={styles.tituloCard}>Página de Corpo</h1>
                            <h2 className={styles.numberCard}>2</h2>
                        </div>
                        <p className={styles.cardTexto}>
                            Descubra como cuidar do corpo com dicas simples e práticas para manter a pele saudável e hidratada.
                        </p>
                    </div>
                </Link>
                <Link href="/makeup" className={styles.navLink}>
                    <div className={styles.card}>
                        <div className={styles.titulo}>
                            <h1 className={styles.tituloCard}>Página de Maquiagem</h1>
                            <h2 className={styles.numberCard}>3</h2>
                        </div>
                        <p className={styles.cardTexto}>
                            Aprenda truques de maquiagem para realçar sua beleza natural e criar looks incríveis para qualquer ocasião.
                        </p>
                    </div>
                </Link>
            </nav>
        </section>
    );
};

export default CategoryCard;