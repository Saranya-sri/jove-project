import React, { Component } from 'react'
import Addtrade from "../Addtrade/Addtrade"
import {Route,Link} from "react-router-dom"
import classes from "./Dashboard.module.css"
export class Dashboard extends Component {
    render() {
        return (
            <div>
                <main className={classes.main}>
               click add trade to add details
            <div className={classes.Plus} ></div>
               <Link className={classes.Addtrade} to="/addtrade"> + Add new trade</Link>
                
                </main>
                
                <div ><Route  path="/addtrade" component={Addtrade}></Route></div>
               
            </div>
        )
    }
}

export default Dashboard
