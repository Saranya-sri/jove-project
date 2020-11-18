import React, { Component } from 'react'
import classes from "./Addtrade.module.css"
import {Link} from "react-router-dom"
export class Addtrade extends Component {
    state={
        inputData:{
        company:"",
        date:"",
        time:"",
        type:"",
        comments:""}
    }
    onChangeHandler=(e)=>{
        const name=e.target.name;
       const  value=e.target.value;
        this.setState({inputData:{...this.state.inputData,[name]:value}})
    }
    onSubmitHandler=()=>{
        alert("you have successfully added your new trading details")
    }
    render() {
        return (
            <div className={classes.inputbox}>
                <form >
                <label>COMPANY NAME:</label>
                  <input type="text" 
                   name="company" 
                   value={this.state.inputData.company}
                   placeholder="Company" 
                   onChange={this.onChangeHandler}></input><br/>
                 <label>DATE:</label>
                  <input 
                   name="date" 
                   value={this.state.inputData.date}
                   placeholder="dd/mm/yyyy" 
                   onChange={this.onChangeHandler}></input><br/>
                 <label>TIME:</label>
                  <input 
                   name="time" 
                   value={this.state.inputData.time}
                   placeholder="13:45" 
                   onChange={this.onChangeHandler}></input><br/>
                 <label>COMMENTS:</label>
                  <textarea
                   type="text" 
                   name="comments" 
                   value={this.state.inputData.comments}
                   placeholder="write your comments" 
                   onChange={this.onChangeHandler}></textarea>
        <button onClick={this.onSubmitHandler} >SUBMIT</button>
                </form>
                <Link className={classes.close} to="/"></Link>
            </div>
        )
    }
}

export default Addtrade
