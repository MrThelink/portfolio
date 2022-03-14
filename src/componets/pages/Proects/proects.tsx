import React from 'react'
import { FaCss3, FaHtml5, FaJava, FaReact, FaUnity } from "react-icons/fa"
import { DiJavascript, DiSass } from "react-icons/di"
import { SiCsharp, SiTypescript} from "react-icons/si";
import styles from "./proects.module.scss"

type ProectsProps = {

}

const Proects: React.FC<ProectsProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_text}>
        <p>
          Projects
        </p>
      </div>
      <div className={styles.box_dev}>
        <div className={styles.box}>
                <h2>
                  School Unity project
                </h2>
                <p className={styles._text}>
                This is my school project game. 
                The game is maze you need found the way out.
                </p>
          <p className={styles.unity}>
            <FaUnity size={20} color="#4c5d70"/>Unity <SiCsharp size={15} color="#68217A"/>C#
          </p>
          <div className={styles.buttons}>
            <a href="https://play.unity.com/mg/other/find-the-way-out-1" rel="noreferrer" target='_blank'>
              <p className={styles.learn_title}>
                Learn More
              </p>
            </a>
          </div>

        </div>
        <div className={styles.box}>
          <h2>
           Portfolio project
          </h2>
          <p className={styles._text}>
            This is my school portfolio project.
          </p>
          <p className={styles.skills_}>
             <SiTypescript size={15} color="#007ACC"/>TS <FaReact size={15} color="#61DAFB"/>React  <DiSass color='#CB6699'/>Scss
          </p>
          <div className={styles.buttons}>
            <a href='https://github.com/MrThelink/portfolio' rel="noreferrer" target='_blank'>
              <p>
                Learn More
              </p>
            </a>
          </div>
        </div>
          <div className={styles.box}>
          <h2>
           Calculator project
          </h2>
          <p className={styles._text}>
            This is my own calculator project.
          </p>
          <p className={styles.skills_}>
            <FaHtml5 size={15} color="#F16529"/>Html  <FaCss3 size={15} color="#33A9DC"/>Css <DiJavascript size={15} color="#F0DB4F"/>JavaScript
          </p>
          <div className={styles.buttons} id={styles.butstyl}>
            <a href='https://github.com/MrThelink/Calculator' rel="noreferrer" target='_blank'>
              <p>
                Learn More
              </p>
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <h2>
            Team school Java game project
          </h2>
          <p className={styles.box_topText}>
            This is rpg Java game. I made this project with classmates (GAME NAME: Magic world).
          </p>
          <p className={styles.box_top} >
            <FaJava size={15} color="red"/>Java
          </p>
          <div className={styles.buttons} id={styles.butstyl}>
            <a href='https://github.com/Jebu04/Peli-projekti/tree/main' rel="noreferrer" target='_blank'>
              <p>
                Learn More
              </p>
            </a>
          </div>
        </div>

        <div className={styles.box}>
          <h2>
            School classmates game project.
          </h2>
          <p className={styles.box_topText}>
            This in classmates game project (GAME NAME: Partin maatila)
          </p>
          <p className={styles.box_top}>
            <FaUnity size={20} color="#4c5d70"/>Unity  <SiCsharp size={15} color="#68217A"/>C#
          </p>
          <div className={styles.buttons} id={styles.butstyl}>  
            <a href='https://github.com/zeta404-ops/varia-agile-20C-ryhma-3' rel="noreferrer" target='_blank'>
              <p>
                Learn More
              </p>
            </a>
          </div>
        </div>

        </div>
      </div>
  )
}

export default Proects
