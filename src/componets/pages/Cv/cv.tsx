import React from 'react'
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
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
                <p>Tools and programming languages that I use for development and making projects</p>
                <div className={styles.skill_resul}>
                    <div className={styles.skill_box}>
                      <a href="">
                          <FaHtml5/>
                      </a>
                      <h3>HTML 5</h3>
                      <h4>I use this laungitsh when I am doing website</h4>
                    </div>

                    <div className={styles.skill_box}>
                    <div>
                      <a href="" id={styles.css}>
                          <FaCss3/>
                      </a>
                      <h3>CSS 3</h3>
                      <h4>I use this laungitsh to dissan my website</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <a href="" id={styles.css}>
                          <FaReact/>
                      </a>
                      <h3>React</h3>
                      <h4>I use this laungitsh to dissan my website</h4>
                    </div>
                  </div>

                </div>
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