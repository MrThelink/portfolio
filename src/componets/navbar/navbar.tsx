import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.scss"


type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar_color}>
         
         <div className={styles.logo}>
            <ul>
               <p>Deni Israilov</p>
            </ul>
          </div>

          <nav>
                <ul className={styles.navbar_text}>
                    <Link to="/">Home</Link>
                    <Link to="/proects">Proects</Link>
                    <Link to="/cv">CV</Link>
                </ul>
          </nav>
      </div>
    </div>
  )
}

export default Navbar
