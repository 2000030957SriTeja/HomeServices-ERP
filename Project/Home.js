import React from 'react'
import { useState } from 'react'
/* import ReCAPTCHA from "react-google-recaptcha"; */
export default function Home()

{

   const[firstname,setfirstname] = useState("")

   const[lastname,setlastname] = useState("")

   const[gender,setgender]=useState("")

   const[age,setage]=useState("")



   function displayvalues(event)

   {

      event.preventDefault()



       var user = {

           firstname:firstname,

           lastname:lastname,

           gender:gender,

           age:age

       }

       console.log(user)

   }
   function handleReset(e) {
      e.preventDefault();
      setfirstname("");
      setlastname("");
      setage("");
      setgender("");
    }

    /* function handleSubmit(e) {
      e.preventDefault();
      setfirstname("");
      setlastname("");
      setage("");
      setgender("");
    } */

    /* function onChange(value) {
      console.log("Captcha value:", value);
    }
   */

   return <div className = 'form'>
<h1 style = {{fontSize : 60 , fontWeight : 'bolder' , color : 'solid black'}}>LOGIN FORM </h1>
   <form onSubmit={displayvalues}>

      <input style={{fontSize : 20 , fontWeight : 'bolder' , color : 'solid black'}}  type="text" placeholder="Enter First Name"   required value={firstname} onChange={ (e) => {setfirstname(e.target.value)}  }    /> <br/><br/>

   <input style={{fontSize : 20 , fontWeight : 'bolder' , color : 'solid black'}} type="text" placeholder="Enter Last Name" required value={lastname} onChange={ (e) => {setlastname(e.target.value)}  }    /> <br/><br/>
<h2 style = {{fontSize : 20 , fontWeight : 'bolder' , color : 'solid black'}}> SELECT GENDER </h2>
  
   <input style={{fontSize : 20 , fontWeight : 'bolder' , color : 'solid black'}} type="radio" value="male" name="gender" required onClick={ (e) => {setgender(e.target.value)}}/>Male 

<input style={{fontSize : 20 , fontWeight : 'bolder' , color : 'solid black'}} type="radio" required value="female" name="gender" onClick={ (e) => {setgender(e.target.value)}}/>Female <br/><br/>

   <input style={{fontSize : 20 , fontWeight : 'bolder' , color : 'solid black'}} type="number" required placeholder="Enter Age" value={age} onChange={ (e) => {setage(e.target.value)}  }    /> <br/><br/>       

   {/* <input type="submit" value="Register"/> */} {/* <input type="reset" value="Clear"/>   */} 

   {/* <ReCAPTCHA
    sitekey="6LfAn5ocAAAAADlP2-pmnWZA9tGCxV-VgunP-lgl"
    onChange={onChange}
  /> */}
   <button id = 'updateBtn' className='button1' /* onClick={handleSubmit} */>Submit</button>
   <input type = 'reset' className='button1' onClick={handleReset}/>

   </form>
   
   </div>

}