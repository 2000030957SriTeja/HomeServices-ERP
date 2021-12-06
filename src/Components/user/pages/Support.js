import React from 'react'
import * as AiIcons from 'react-icons/ai';
export default function Support()
{
    return (
        <div className="Img">
         <h1 style={{color:"black"}}>For support</h1>
         <h2 style={{color:"black"}}>Contact:</h2>
         <h2 style={{color:"black"}}> <AiIcons.AiOutlinePhone />
              879756789</h2>
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:<br/>SupportHelp.com</a> 
              </div>
    )
}