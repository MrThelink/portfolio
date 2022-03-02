import React from 'react'
import { FaReact, FaUnity } from 'react-icons/fa'
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
            <FaUnity size={20}/> Unity C#
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
            This is my portfolio proect.
          </p>
          <p className={styles.skills_}>
             TypeScript <FaReact size={15}/>React  Scss
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
            Project
          </h2>
            <p className={styles._text}>
              Coming soon
            </p>
            <p className={styles.unity}>
              TypeScript Scss
            </p>
            <div className={styles.buttons}>
            <a href='https://github.com/MrThelink/portfolio'  rel="noreferrer" target='_blank'>
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
