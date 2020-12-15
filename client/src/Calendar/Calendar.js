import React, { Component } from 'react'
import classes from "./Calendar.module.css"
import {Link} from "react-router-dom"
export class Calendar extends Component {
    state={
        yearinput:2020,
        monthindexinput:10,
    
    }
    // prevyearHandler=()=>{
    //     this.setState({
    //         yearinput:this.state.yearinput-1
    //     })
    // }
    // nextyearHandler=()=>{
    //    this.setState({yearinput:this.state.yearinput + 1})
    // }
    prevmonthHandler=()=>{if(this.state.monthindexinput>0){
  this.setState({monthindexinput:this.state.monthindexinput - 1})}
  else if(this.state.monthindexinput===0){
      this.setState({monthindexinput:this.state.monthindexinput+11,yearinput:this.state.yearinput-1})
  }
  
    }
    nextmonthHandler=()=>{if(this.state.monthindexinput<11){
        this.setState({monthindexinput:this.state.monthindexinput + 1})}
        else if(this.state.monthindexinput===11){
            this.setState({monthindexinput:this.state.monthindexinput-11,yearinput:this.state.yearinput+1})
        }
        
    }
    render() {
        const todayyear=new Date().getFullYear();
        const todaymonth=new Date().getMonth();
        
        const todaydate=new Date().getDate();
     
    const yearinput=this.state.yearinput.toString();
     
     const monthindexinput=this.state.monthindexinput + 1 ;
     
    
     
      
        const todaymonths=["Jan","Feb","Mar","Apr","May","Jun","Jul",
        "Aug","Sep","Oct","Nov","Dec"];
        const todaymonthName=todaymonths[todaymonth];
        
        let numDays=null;
      
        const numOfDays=(year,month)=>{
            numDays=new Date(year,month,0).getDate();
            return numDays;
        }
        const numOfDay=numOfDays(yearinput,monthindexinput);
       
        let days=[]
        for (let i=1;i<=numOfDay;i++){
      
               days.push(i)
        }
     
        
        const firstday=new Date(yearinput,monthindexinput-1,1);
        const firstdayindex=firstday.getDay()

        let arrayfordays=[]
        for(let i=1;i<=firstdayindex;i++){
            arrayfordays.push(i)
        }
        
        
    const months=["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ",
    "Aug ","Sep ","Oct ","Nov ","Dec "];
    let monthName=months[this.state.monthindexinput];
    
    
      return (
            <div className={classes.calcontainer}>
                <div className={classes.calheader}>
                    
                        <i className={classes.prevnext} onClick={this.prevmonthHandler}> &lt; </i>

                        <p className={classes.month} className={classes.monthyear}>{monthName}{this.state.yearinput}  <Link to="/month" className={classes.downarrow}> &darr;</Link></p>
                        
                        <i className={classes.prevnext} onClick={this.nextmonthHandler}> &gt;</i>
                    
                    {/* <div> 
                        <i className={classes.prevnext} onClick={this.prevyearHandler}> prev </i>
                        <p className={classes.year } className={classes.monthyear}>{this.state.yearinput}</p>
                        <i className={classes.prevnext} onClick={this.nextyearHandler}> next </i>
                    </div> */}
                </div>
                {/* <div className={classes.todaysdate}>TODAY'S DATE :{todaydate},{todaymonthName} , {todayyear}</div> */}
              
                <div className={classes.weekdays}>
                    <div >Sun</div>
                    <div >Mon</div>
                    <div >Tue</div>
                    <div >Wed</div>
                    <div>Thu</div>
                    <div >Fri</div>
                    <div >Sat</div>
                </div>
                <div className={classes.days}>
                       {arrayfordays.map((h)=>(<div></div>))}
                       {days.map((p)=>(<div className={classes.dayhover}>{p}</div>))}
                   
                </div>
            </div>
        )
    }
}

export default Calendar
