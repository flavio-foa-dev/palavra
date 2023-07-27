import styles from './hero2.module.css';
import foto from '../../assets/foto4.png';

export default function Hero2() {
  return (
    <div className={styles.hero}>

      <div className={styles.hero_info}>
        <img className={styles.avatar} src={foto} alt="" />
        <div>
          <h1 className={styles.title}>Flavio</h1>
          <h2 className={styles.subtitle}>Online</h2>


        </div>
      </div>

    </div>

  );
}
