import hero from '../../assets/logos/ceu4.jpg';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.img} src={hero} alt="Hero margarida" />
      <h1 className={styles.title}>E conhecereis a verdade, e a verdade vos libertará.</h1>

      <section className={styles.header}>
        <h1>A Palavra</h1>
        <p>E conhecereis a verdade, e a verdade vos libertará.</p>
        <a className={styles.btn_bgstroke}>Ouca mais</a>
      </section>
    </div>
  );
}
