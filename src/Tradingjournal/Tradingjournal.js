import React, { Component } from 'react'
import {Link,Route} from "react-router-dom"
import classes from "./Tradingjournal.module.css"

import Addtrade from "../Addtrade/Addtrade"
export class Tradingjournal extends Component {
    render() {
        return (
            <div>
                <header className={classes.mainh}>
                <div className={classes.maindivlink}>
                    Trading journal
                </div>
                <nav className={classes.mainnav}>
                    <ul className={classes.mainnavitems}>
                        <li className={classes.mainnavitem}><a href="/">Dashboard</a></li>
                        <li className={classes.mainnavitem}><a href="/history">History</a></li>
                        <li className={classes.mainnavitem}><a href="/sighout">Sighout</a></li>
                    </ul>
                </nav>
            </header>
            <main>
            <div className={classes.Plus} ></div>
               <Link className={classes.Addtrade} to="/addtrade">ADD TRADE</Link>
                
                </main>
                
                <div ><Route  path="/addtrade" component={Addtrade}></Route></div>
               
            </div>
        )
    }
}

export default Tradingjournal
