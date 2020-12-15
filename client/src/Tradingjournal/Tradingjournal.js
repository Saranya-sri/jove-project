import React, { Component } from "react";
import { Route } from "react-router-dom";
import classes from "./Tradingjournal.module.css";
import History from "../History/History";

import Dashboard from "../Dashboard/Dashboard";
export class Tradingjournal extends Component {
  render() {
    return (
      <div className={classes.wholepage}>
        <header className={classes.mainh}>
          <div className={classes.maindivlink}>Trading journal</div>
          <nav className={classes.mainnav}>
            <ul className={classes.mainnavitems}>
              <li className={classes.mainnavitem}>
                <a href="/">Dashboard</a>
              </li>
              <li className={classes.mainnavitem}>
                <a href="/history">History</a>
              </li>
              <li className={classes.mainnavitem}>
                <a href="/sighout">Sign out</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/history" component={History}></Route>
        <Route path="/" component={Dashboard}></Route>
      </div>
    );
  }
}

export default Tradingjournal;
