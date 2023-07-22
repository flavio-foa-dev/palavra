import { useState } from 'react'
import './navegation.css'

export default function Nav() {
  const [toggle, setVsetToggle] = useState(false)

  function hendleToggle() {
    setVsetToggle(!toggle)
  }

  return (
    <>
      <div id="menu">
        <div id="menu-bar" className={toggle?"change": ""} onClick={()=> hendleToggle()}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>

        <nav className={toggle? "nav change" : "nav"} id="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </div>
      <div className={toggle?"menu-bg change-bg": "menu-bg" } id="menu-bg"></div>
    </>
  )
}
