import React, { Component } from 'react'
import classes from "./UserinputData.module.css"
import {Link} from "react-router-dom"
class UserinputData extends Component {
    render() {
        return (
            <div>
               <div className={classes.Plus} ></div>
               <Link className={classes.Addtrade} to="/addtrade">ADD TRADE</Link>
            </div>
        )
    }
}

export default UserinputData
