import React, { Component } from 'react'
import classes from "./Addtrade.module.css"
import {Link} from "react-router-dom"
export class Addtrade extends Component {
    state={
        inputData:{
        company:"",
        type:"",
        selldateAndTime:"",
        buydateAndTime:"",
        sellprice:"",
        buyprice:"",
        comments:""}
    }
    onChangeHandler=(e)=>{
        const name=e.target.name;
       const  value=e.target.value;
        this.setState({inputData:{...this.state.inputData,[name]:value}})
    }
    onSubmitHandler=()=>{
        alert("you have successfully added your new trading details");
        alert(JSON.stringify(this.state.inputData))
    }
    
    render() {
        return (
            <div className={classes.inputbox}>
                 <p className={classes.tradehead}>TRADE DETAILS</p>
                <form >
                <label>Company </label>
                <input 
                  type="text" 
                  name="company" 
                  value={this.state.inputData.company}
                  placeholder="Company" 
                  onChange={this.onChangeHandler}></input><br/>

                <label for="Tradetype">Trade type </label>

                 <select name="type" >
                <option value={this.state.inputData.type}>Short</option>
                <option value={this.state.inputData.type}>Long</option>
  
                 </select>
               <br/>

            <div className={classes.userinputwrp1}>
             <br/>
                 <input 
              type="text"
              name="sell date and time" 
              value={this.state.inputData.selldateAndTime}
              onChange={this.onChangeHandler}
              className={classes.inputText} 
           />
        <span className={classes.floatinglabel1}>sell date and time</span>
     </div>
     <div className={classes.userinputwrp1} >
     <br/>
     <input name="buy date and time" type="text" 
     onChange={this.onChangeHandler}
    value={this.state.inputData.buydateAndTime}

  onChange={this.onChangeHandler}
    className={classes.inputText} 
    ></input>
  {/* <input 
  name="buydate and time" 
  value={this.state.inputData.buydateAndTime}
  type="datetime-local"
  onChange={this.onChangeHandler}
/> */}
  <span  className={classes.floatinglabel1} >Buy date and time</span>
</div>


<div className={classes.userinputwrp}>
  <br/>
  <input name="sellprice" 
        value={this.state.inputData.sellprice}
         
        onChange={this.onChangeHandler}
         className={classes.inputText} required/>
  <span className={classes.floatinglabel}>Sell price Rs</span>
</div>

                

<div className={classes.userinputwrp}>
  <br/>
  <input  name="buyprice" 
          value={this.state.inputData.buyprice}
         
           onChange={this.onChangeHandler} className={classes.inputText} required/>
  <span className={classes.floatinglabel}>Buy price Rs</span>
</div>

                <br/>
               
                 {/* <label>Comments</label><br/>
                  <textarea
                   type="text" 
                   name="comments" 
                   value={this.state.inputData.comments}
                   placeholder="comments here" 
                   onChange={this.onChangeHandler}></textarea><br/>  */}
        <button onClick={this.onSubmitHandler} >SUBMIT</button>
                </form>
                <Link className={classes.close} to="/"></Link>
            </div>
        )
    }
}

export default Addtrade
