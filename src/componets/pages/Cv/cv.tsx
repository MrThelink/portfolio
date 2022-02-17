import React from 'react'
import styles from "./cv.module.scss"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.about_text}>
            <div className={styles.section_title}>
              <h2>Education</h2>
            </div>
            <div className={styles.p_text}>
              <p>Currently studying Bachelor of Degree in Information and Communication Technology, Varia 12.08.2020 - 03.06.2023</p>
            </div>
            <div className={styles.padd}>
                <h3>SKILLS</h3>
                <p>Agile software development Participating on small scrum teams
                    Writing user stories Working with clients to develop product backlogs</p>
              <div className={styles.skill}>
                <div className={styles.skills_item}>html</div>
                <div className={styles.skills_item}>css</div>
                <div className={styles.skills_item}>c#</div>
                <div className={styles.skills_item}>scss</div>
                <div className={styles.skills_item}>javasScript</div>
                <div className={styles.skills_item}>typesScript</div>
                <div className={styles.skills_item}>react</div>
                <div className={styles.skills_item}>unity</div>
                <div className={styles.skills_item}>wordpress</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cv
