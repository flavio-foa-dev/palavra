import { useState } from 'react'
import styles from './nav.module.css'
import logo from '../../assets/logos/logo.png'
//import { useLocation } from 'react-router-dom';

export default function Nav2() {
  //const url = useLocation();
  //console.log(url);
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setToggle(!toggle)
    console.log(toggle, "hello word")

  //   <nav className="flex items-center justify-center h-[6rem] gap-3">
  //   <Link to='/'>
  //     <p className={url.pathname === '/' ? styles.ative : ''}>Home</p>
  //   </Link>
  //   <Link to='/sobre'>
  //     <p className={url.pathname === '/sobre' ? styles.ative : ''}>Sobre</p>
  //   </Link>
  // </nav>
  }

  return (
    <div className={styles.container}>
      <span><img src={logo} alt="logo"/></span>
      <ul className={styles.ul}>
        <li>Home</li>
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
