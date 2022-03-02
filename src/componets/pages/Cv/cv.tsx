import React from 'react'
import styles from "./cv.module.scss"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.about_text}>
              <div className={styles.top_text}>
                <h2>
                  CV
                </h2>
                <p>
                  Hi! Welcome to my cv page. I am currently studying information and communication technologies.
                </p>
              </div>

            <div className={styles.section_title}>
              <h2>Education</h2>
            </div>

            <div className={styles.p_text}>
              <p>Currently studying Bachelor of Degree in Information and Communication Technology, Varia 12.08.2020 - 03.06.2023</p>
            </div>

            <div className={styles.padd}>
                <h2>SKILLS</h2>
                <p>Agile software development Participating on small scrum teams  
                    Writing user stories Working with clients to develop product backlogs</p>
            </div>

            <div className={styles.lan_ski}>
              <h2>
                Languages
              </h2>
              <div className={styles.skill_info}>
                  <h4>
                    Chechen
                  </h4>
              <div className={styles.dot_controller}>
                <div className={styles.dot_bar}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>
              </div>
            </div>

              <div className={styles.skill_info}>
                  <h4>
                    English
                  </h4>
              <div className={styles.dot_controller}>
                <div className={styles.dot_bar}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot_dark}></span>
                  <span className={styles.dot_dark}></span>
                </div>
              </div>
              </div>

              <div className={styles.skill_info}>
                  <h4>
                    Finnish
                  </h4>
              <div className={styles.dot_controller}>
                <div className={styles.dot_bar}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot_dark}></span>
                </div>
              </div>
              </div>

              <div className={styles.skill_info}>
                    <h4>
                      Russian
                    </h4>
                <div className={styles.dot_controller}>
                  <div className={styles.dot_bar}>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                    </div>
                  </div>
                </div>

              <div className={styles.skill_info}>
                  <h4>
                    Ingush
                  </h4>
              <div className={styles.dot_controller}>
                <div className={styles.dot_bar}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot_dark}></span>
                </div>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Cv