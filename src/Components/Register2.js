import React from "react"
import './register2.css'
import { Component } from "react";
import {useState} from 'react'
import { Button } from '@material-ui/core';
import { color } from "@mui/system";
import axios from "axios"

   
    function Register2(){
        const[input,setInput]=useState({
            name:'',
            email:'',
            password:'',
            phone:''

        })
        function handleChange(event){
            const{name,value}=event.target;
            setInput(prevInput =>{
                return{
                    ...prevInput,
                    [name]:value,
                }
            })
        }
    function handleClick(event){
event.preventDefault();
const newNote ={
    name:input.name,
    email:input.email,
    password:input.password,
    phone:input.phone
}
axios.post('http://localhost:3001/create',newNote)
    }
       
    
    return(
        <div className="hero-image">
        <div className="hero-text">

        <div class="container" >
		<div class="row">
		<div class="col-md-3">
					
		</div>
				
		<div class="col-md-6 main">
					
		<form >
        <h1 style={{color:'white'}}> Sign Up!!!!!</h1>
							<div className='form-group'>
                            <input type="text" name="name" id="name" className="form-control"
                            placeholder="Name" size="65" value={input.name} onChange={handleChange}  /><br/>
                            </div>
                            <div className='form-group'>              
                            <input type="email" name="email" id="email" className="form-control"
                            placeholder="E-Mail " value={input.email} onChange={handleChange}/><br/>
</div>
                             <div className='form-group'>               
                            <input type="password" name="password" className="form-control"
                            id="password" placeholder="Password "  value={input.password} onChange={handleChange}/><br/>
</div>
                             <div className='form-group'>               
                            <input type="text" name="phone" id="phone" className="form-control"
                            placeholder="Phone Number " size="65" value={input.phone} onChange={handleChange}/><br/>
</div>

<button onClick={handleClick} className = "btn btn-lg btn-info">signup</button>
<p style={{color:"white"}}> New User? <a href="http://localhost:3000" style={{color:'aqua'}}><u>After signup login here..</u></a></p>

                           
            </form>	
					
		</div>
				
				
		<div class="col-md-3">
		</div>
				
	</div>
	</div>


</div>
</div>
)
        }     
export default Register2

