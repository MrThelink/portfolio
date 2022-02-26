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
            </div>
        </div>
    </div>
  )
}

export default Cv