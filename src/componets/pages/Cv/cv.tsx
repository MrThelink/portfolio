import React from 'react'
import { FaHtml5, FaReact } from "react-icons/fa"
import { DiCss3, DiJava, DiJavascript, DiSass, } from "react-icons/di"
import { SiCsharp, SiTypescript, SiUnity } from "react-icons/si";
import styles from "../Cv/cv.module.scss"
import { BioSection, BioYear, Bio } from '../Cv/bio'
import Section from "../Cv/section"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
       <Section>
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

            <Bio>

              <Section delay={0.2}>
                <BioSection>
                    <BioYear>2020 – 2023</BioYear>
                    Studying Vantaan Ammattiopisto Varia Information and communication technologies
                </BioSection>

                <BioSection>
                    <BioYear>2018 - 2020</BioYear>
                      Vantaan Kilterin koulu High school
                </BioSection>  

                <BioSection>
                  <BioYear>2017 - 2018</BioYear>
                      Vantaan Uomarinteen koulu Elementary School
                </BioSection>

                <BioSection>
                  <BioYear>2016 - 2017</BioYear>
                    Vaasaa Palosaaren koulu Elementary School
                </BioSection>

              </Section>
            </Bio>

            <div className={styles.padd}>
                <h2>SKILLS</h2>
                <p>Tools and programming languages that I use for development and making projects</p>
                <div className={styles.skill_resul}>
                    <div className={styles.skill_box}>
                      <span>
                          <FaHtml5/>
                      </span>
                      <h3>HTML 5</h3>
                    </div>

                    <div className={styles.skill_box}>
                    <div>
                      <span id={styles.css}>
                          <DiCss3/>
                      </span>
                      <h3>CSS 3</h3>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.js}>
                          <DiJavascript/>
                      </span>
                      <h3>JavaScript</h3>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.ts}>
                          <SiTypescript/>
                      </span>
                      <h3>TypeScript</h3>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.java}>
                          <DiJava/>
                      </span>
                      <h3>Java</h3>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.react}>
                          <FaReact/>
                      </span>
                      <h3>React</h3>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.sass}>
                          <DiSass/>
                      </span>
                      <h3>Sass</h3>
                    </div>
                  </div>

                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.csharp}>
                          <SiCsharp/>
                      </span>
                      <h3>C#</h3>
                    </div>
                  </div>
                  
                  <div className={styles.skill_box}>
                    <div>
                      <span id={styles.unity}>
                          <SiUnity/>
                      </span>
                      <h3>Unity</h3>
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
        </Section>
    </div>
  )
}

export default Cv