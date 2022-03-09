import React from 'react'
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa"
import { DiJava, DiJavascript, DiSass, } from "react-icons/di"
import { SiCsharp, SiGithub, SiTypescript, SiUnity } from "react-icons/si";
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
              <p>Vantaan Ammattiopisto Varia 2020 – 2023 Information and communication technologies</p>
            </div>

            <div className={styles.padd}>
                <h2>SKILLS</h2>
                <p>Tools and programming languages that I use for development and making projects</p>
                <div className={styles.skill_resul}>
                    <div className={styles.skill_box}>
                      <span>
                          <FaHtml5/>
                      </span>
                      <h3>HTML 5</h3>
                      <h4>I use this HTML when I am doing website</h4>
                    </div>

                    <div className={styles.skill_box}>
                    <div>
                      <span id={styles.css}>
                          <FaCss3/>
                      </span>
                      <h3>CSS 3</h3>
                      <h4>I use this css to dissan my website</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.js}>
                          <DiJavascript/>
                      </span>
                      <h3>JavaScript</h3>
                      <h4>I use this JS to dissan my website</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.ts}>
                          <SiTypescript/>
                      </span>
                      <h3>TypeScript</h3>
                      <h4>I use this TS to dissan and make website</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.java}>
                          <DiJava/>
                      </span>
                      <h3>Java</h3>
                      <h4>I use Java when i need to make mobile site</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.react}>
                          <FaReact/>
                      </span>
                      <h3>React</h3>
                      <h4>I use this React when I am doing website ...</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.sass}>
                          <DiSass/>
                      </span>
                      <h3>Sass</h3>
                      <h4>I use this sass to dissan my website</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.csharp}>
                          <SiCsharp/>
                      </span>
                      <h3>C#</h3>
                      <h4>I use this c# when I makes games</h4>
                    </div>
                  </div>
                  
                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.unity}>
                          <SiUnity/>
                      </span>
                      <h3>Unity</h3>
                      <h4>I use Unity when i'm doing games</h4>
                    </div>
                  </div>
                </div>
            </div>

            <div className={styles.lan_ski}>
              <h2 id={styles.lan_text}>
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
        </div>
    </div>
  )
}

export default Cv