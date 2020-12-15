import React, { Component } from 'react'
import {Route} from "react-router-dom"

import Yearselection from  "../Yearselection/Yearselection"
import classes from "./Appforcalendar.module.css"
import Monthselection from '../Monthselection/Monthselection'
import Calendar from  "../Calendar/Calendar"

// import Yearselection from './Yearselection/Yearselection'
export class Appforcalender extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h2 className={classes.calendar}>CALENDAR</h2>
        <Route path="/" exact component={Calendar}></Route>;
   <Route path="/year" component={Yearselection}></Route>
        <Route path="/month" component={Monthselection}></Route>
      </div>
    )
  }
}

export default Appforcalender
