import hero from '../../assets/logos/ceu.jpeg'
import styles from './hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.img} src={hero} alt="Hero margarida" />
    </div>
  )
}
