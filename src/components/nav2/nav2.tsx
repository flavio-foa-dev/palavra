import { useState } from 'react'
import styles from './nav.module.css'
import logo from '../../assets/logos/logo.png'

export default function Nav2() {
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setToggle(!toggle)
    console.log(toggle, "hello word")
  }

  return (
    <div className={styles.container}>
      <span><img src={logo} alt="logo"/></span>
      <ul className={styles.ul}>
        <li className={styles.li}>Home</li>
        <li>Palavra</li>
        <li>Devocional</li>
        <li>Historia</li>
        <li>Livros</li>
      </ul>
      <div className={styles.container__bar} onClick={()=> handleClick()}>
          <div id="bar1" className={styles.bar}></div>
          <div id="bar2" className={styles.bar}></div>
          <div id="bar3" className={styles.bar}></div>
      </div>
    </div>
  )
}