import React from 'react'
import { FaCss3, FaHtml5, FaReact, FaUnity } from "react-icons/fa"
import { DiJavascript, DiSass } from "react-icons/di"
import { SiCsharp, SiGithub, SiTypescript, SiUnity } from "react-icons/si";
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
            <FaUnity size={20}/>Unity <SiCsharp size={15}/>C#
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
             <SiTypescript size={15}/>TS <FaReact size={15}/>React  <DiSass/>Scss
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
            <FaHtml5 size={15}/>Html  <FaCss3 size={15}/>Css <DiJavascript size={15}/>JavaScript
          </p>
          <div className={styles.buttons} id={styles.butstyl}>
            <a href='https://github.com/MrThelink/portfolio' rel="noreferrer" target='_blank'>
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
