import React, { Component } from 'react'
import classes from "./Monthselection.module.css"
import {Link} from "react-router-dom"
export class Monthselection extends Component {
    state={
        selectedYear:2020,
      selectedMonth:"10"
    
    }


    render() {
    
    

        
      return (
            <div className={classes.calcontainer}>
                <div className={classes.calheader}>
                    
                        <i className={classes.prevnext} > &lt; </i>

                        <p  className={classes.year}>{this.state.selectedYear}  <Link to="/year" className={classes.downarrow}>&darr;</Link></p>
                        
                        <i className={classes.prevnext} > &gt;</i>
                    
                    
                </div>
                
                <div className={classes.monthtwelve}>
                    <div className={classes.monthhover}>January</div>
                    <div className={classes.monthhover}>February</div>
                    <div className={classes.monthhover}>March</div>
                    <div className={classes.monthhover}>April</div>
                    <div className={classes.monthhover}>May</div>
                    <div className={classes.monthhover}>June</div>
                    <div className={classes.monthhover}>July</div>
                    <div className={classes.monthhover}>August</div>
                    <div className={classes.monthhover}>September</div>
                    <div className={classes.monthhover}>October</div>
                    <div className={classes.monthhover}>November</div>
                    <div className={classes.monthhover}>December</div>
                   {/* {years.map((year)=>(<div className={classes.yearhover}>{year}</div>))} */}
                </div>
            </div>
        )
    }
}

export default Monthselection
