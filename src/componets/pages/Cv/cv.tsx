import React from 'react'
import styles from "./cv.module.scss"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.about_text}>
            <div className={styles.section_title}>
              <h2>About Me</h2>
            </div>
            <div className={styles.p_text}>
              <p>Currently studying Bachelor of Degree in Information and Communication Technology, Varia 12.08.2020 - 03.06.2023</p>
            </div>
            <div className={styles.padd}>
                <h3>SKILLS</h3>
                <div className={styles.skill}>
                <div className={styles.skills_item}>html</div>
                <div className={styles.skills_item}>css</div>
                <div className={styles.skills_item}>javasScript</div>
                <div className={styles.skills_item}>typesScript</div>
                <div className={styles.skills_item}>c#</div>
                <div className={styles.skills_item}>scss</div>
                <div className={styles.skills_item}>react</div>
                <div className={styles.skills_item}>unity</div>
                <div className={styles.skills_item}>wordpress</div>
            </div>

            <div className={styles.about_tabs}>
                <button className={styles.tab_item}>
                  Download CV
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cv
