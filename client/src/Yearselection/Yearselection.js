import React, { Component } from 'react'
import classes from "./Yearselection.module.css"

export class Yearselection extends Component {
    state={
        startingYear:2020,
       endingYear:2029,
    
    }
    prevyearHandler=()=>{
        this.setState({
            startingYear:this.state.startingYear-10,
            endingYear:this.state.endingYear-10,
        })
    }
    nextyearHandler=()=>{
       this.setState({
        startingYear:this.state.startingYear+10,
        endingYear:this.state.endingYear+10}
       )
    }

    render() {
    
    const startingYear=this.state.startingYear;
    
    const endingYear=this.state.endingYear;
     let years=[]
     for(let i=startingYear;i<=endingYear;i++){
         years.push(i)
     }

        
      return (
            <div className={classes.calcontainer}>
                <div className={classes.calheader}>
                    
                        <span to="/" className={classes.prevnext} onClick={this.prevyearHandler}> &lt; </span>

                        <p  className={classes.year}>{this.state.startingYear} - {this.state.endingYear} </p>
                        
                        <span to="/" className={classes.prevnext} onClick={this.nextyearHandler}> &gt;</span>
                    
                    
                </div>
                
                <div className={classes.yearten}>
                   {years.map((year)=>(<div className={classes.yearhover}>{year}</div>))}
                </div>
            </div>
        )
    }
}

export default Yearselection


