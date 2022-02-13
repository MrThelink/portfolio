import React from 'react'
import styles from "./bootstrap.module.scss"

type Bootstrap  = {

}

const Bootstrap : React.FC<Bootstrap> = () => {
  return (
    <nav>
        <div className={styles.text}>
            <h1>Hi girls.</h1>
        </div>
    </nav>
  )
}

export default Bootstrap 
