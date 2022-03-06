import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.scss"
import { GiHamburgerMenu } from "react-icons/gi";


type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  const [burgermenuIsOpen, setBurgermenuIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
          <nav>
                <div className={styles.logo}>
                  <h4>Deni</h4>
                </div>
                <ul className={styles.nav_links}>
                    <Link to="/">Home</Link>
                    <Link to="/proects">Projects</Link>
                    <Link to="/cv">CV</Link>
                </ul>

                <div className={styles.burgerMenuButton} onClick={() => setBurgermenuIsOpen(!burgermenuIsOpen)}>
                  <GiHamburgerMenu size={28} />
                </div>

                {
                  burgermenuIsOpen
                  ? (
                    <div className={styles.brgrMenuItems}>
                      <Link to="/">Home</Link>
                      <Link to="/proects">Projects</Link>
                      <Link to="/cv">CV</Link>
                    </div>
                  )
                  : null
                }

          </nav>
    </div>
  )
}

export default Navbar
