import React from 'react'
import syles from "./cv.module.scss"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={syles.container}>
      <h1>CV</h1>
    </div>
  )
}

export default Cv
