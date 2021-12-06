import React from 'react';
import { Button } from '@material-ui/core';


class Login3 extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
         
          fields["emailid"] = "";
        
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

     

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

     

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*password must be atleast 8 characters , 1 special character , 1 lowercase letter , 1 uppercase letter";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
        <div className="hero-image">
        <div className="hero-text">
<h1> Welcome to PC^2 services  </h1>
        <div class="container" >
    <div class="row">
    <div class="col-md-3">
          
    </div>
        
    <div class="col-md- main">
        <h1 style={{color:'white'}}>login page</h1>
        <form onSubmit= {this.submituserRegistrationForm} >
       
        <label style={{color:'white'}}>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div style={{color:'red'}} className="errorMsg">{this.state.errors.emailid}</div>
      
        <label style={{color:'white'}}>Password</label>
        <input  type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div  style={{color:'red'}}className="errorMsg">{this.state.errors.password}</div>
        <Button href="http://localhost:3000/sidebar" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>Login </Button>
<br/>
<p style={{color:"white"}}> New User? <a href="http://localhost:3000/register" style={{color:'aqua'}}><u>Register Here</u></a></p>


<input type="submit" value="Check"/>
        </form>
        </div>
        
        
        <div class="col-md-3">
        </div>
            
      </div>
      </div>
    
    
    </div>
    </div>

      );
  }


}


export default Login3