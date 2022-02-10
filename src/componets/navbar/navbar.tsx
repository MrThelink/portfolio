import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.scss"


type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
          <nav>
                <div className={styles.logo}>
                  <h4>Deni</h4>
                </div>

                <ul className={styles.nav_links}>
                    <Link to="/">Home</Link>
                    <Link to="/proects">Proects</Link>
                    <Link to="/cv">CV</Link>
                </ul>

                <div className={styles.burger}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
          </nav>
    </div>
  )
}

export default Navbar
