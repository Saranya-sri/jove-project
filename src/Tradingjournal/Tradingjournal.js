import React, { Component } from 'react'
import classes from "./Tradingjournal.module.css"
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
            <main>main</main>
            <footer>footer</footer>
            </div>
        )
    }
}

export default Tradingjournal
