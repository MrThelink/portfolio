import React from 'react'
import styles from "./proects.module.scss"
import { FaGithub } from 'react-icons/fa';

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

          <p>
            Tahts is my school work 
          </p>

          <p>
            Unity
          </p>

          <p>
            C#
          </p>

          <a href='https://github.com/MrThelink?tab=repositories'  rel="noreferrer" target='_blank'>
              <i>
                 <FaGithub/>
              </i>
          </a>

        </div>
        <div className={styles.box}>
          <h2>
           Portfolio project
          </h2>
        </div>
        <div className={styles.box}>
         <h2>
            First project
          </h2>
        </div>
      </div>
        </div>
  )
}

export default Proects
