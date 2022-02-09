import React from 'react'
import styles from "./main.module.scss"

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <h1>MAIN</h1>
    </div>
  )
}

export default Main
