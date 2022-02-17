import React from 'react'
import styles from "./main.module.scss"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.home}>
            <h1 className={styles.text}>Hi, I am <span className={styles.about_name}>Deni.</span></h1>
            <h2 className={styles.aboute_text}>Software developer</h2>
        </div>
        <div className={styles.social}>
          <ul>
            <li className={styles.fa}>
              <a href='https://github.com/MrThelink' target='_blank'>
                <i>
                  <FaGithub/>
                </i>
              </a>
            </li>
            <li className={styles.fa}>
              <a href='https://google.com' target='_blank'>
                <i>
                  <FaLinkedin/>
                </i>
              </a>
            </li>
            <li className={styles.fa}>
              <a href='https://www.instagram.com/d7enii/' target='_blank'>
                <i>
                  <FaInstagram/>
                </i>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Main
