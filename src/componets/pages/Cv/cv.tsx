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
                      <a>
                          <FaHtml5/>
                      </a>
                      <h3>HTML 5</h3>
                      <h4>I use this laungitsh when I am doing website</h4>
                    </div>

                    <div className={styles.skill_box}>
                    <div>
                      <a id={styles.css}>
                          <FaCss3/>
                      </a>
                      <h3>CSS 3</h3>
                      <h4>I use this laungitsh to dissan my website</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <a id={styles.js}>
                          <DiJavascript/>
                      </a>
                      <h3>JavaScript</h3>
                      <h4>I use this laungitsh to dissan my website</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <a href="" id={styles.ts}>
                          <SiTypescript/>
                      </a>
                      <h3>TypeScript</h3>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <a id={styles.java}>
                          <DiJava/>
                      </a>
                      <h3>Java</h3>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <a id={styles.react}>
                          <FaReact/>
                      </a>
                      <h3>React</h3>
                      <h4>II use this laungitsh when I am doing website ...</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <a id={styles.sass}>
                          <DiSass/>
                      </a>
                      <h3>Sass</h3>
                      <h4>I use this laungitsh to dissan my website</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <a id={styles.csharp}>
                          <SiCsharp/>
                      </a>
                      <h3>C#</h3>
                      <h4>I use this languish to make fun games ...</h4>
                    </div>
                  </div>
                  
                  <div className={styles.skill_box}>
                    <div>
                      <a id={styles.unity}>
                          <SiUnity/>
                      </a>
                      <h3>Unity</h3>
                      <h4>I use this when i'm doing games</h4>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <a id={styles.github}>
                          <SiGithub/>
                      </a>
                      <h3>Github</h3>
                      <h4>I use github to push my codes</h4>
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