import { useState } from 'react';
import styles from './menu.module.css';
import logo from '../../assets/logos/logo.png';
import classNames from 'classnames';
import dataMenu from '../../data/navegation.json';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Menu() {
  const url = useLocation();
  console.log(url.pathname);
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <>
      <div className={styles.container}>
        <span><img src={logo} alt="logo"/></span>
        <ul className={styles.ul}>
          {dataMenu.map((item) =>
            <Link className={styles.link} to={item.link} key={item.nome}>
              <li className={url.pathname == item.link ?`${styles.li} ${styles.ative}` :styles.li} >{item.nome}</li>
            </Link>
          )}
        </ul>
        <div className={styles.container__bar} onClick={()=> handleClick()}>
          <div className={classNames({
            [styles.bar]: true,
            [styles.bar1]: toggle
          })}></div>
          <div className={classNames({
            [styles.bar]: true,
            [styles.bar2]: toggle
          })}></div>
          <div className={classNames({
            [styles.bar]: true,
            [styles.bar3]: toggle
          })}></div>
        </div>
      </div>
      <div className={`${styles.menu_bg }`}>
        <ul className={!toggle? styles.display: ''}>
          {dataMenu.map((item) =>
            <Link className={styles.link} to={item.link} key={item.nome}>
              <li className={styles.menu__item } >{item.nome}</li>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}
