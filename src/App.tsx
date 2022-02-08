import React from 'react'
import Cv from './componets/pages/Cv/cv'
import Main from './componets/pages/main/main'
import Proects from './componets/pages/Proects/proects'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './componets/navbar/navbar';
import styles from "./app.module.scss"



const App: React.FC = () => {
  return (
    <div className={styles.container}>

      <Router basename='/portfolio'>
        <Navbar/>

        <Switch>
          {/* Changing content comes here */}
          <Route exact path='/' component={Main} />
          <Route exact path='/cv' component={Cv}/>
          <Route exact path='/proects' component={Proects}/>
        </Switch>

      </Router>
    
    </div>
  )
}

export default App
