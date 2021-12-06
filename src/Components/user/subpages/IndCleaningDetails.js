import React from 'react'
import './Details.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as AiIcons from 'react-icons/ai';
export default function IndCleaningDetails()
{
    const [value, setValue] = React.useState(4);
    return (
      
      <div >
      <h1>Cleaning<img width="60" src="https://5.imimg.com/data5/PK/OA/MY-38373342/home-deep-cleaning-sofa-cleaning-bathroom-cleaning-500x500.jpg"></img></h1>
      <div className="wrapper">
      <div className="name">

          <img width="200"  src="https://ii1.pepperfry.com/media/catalog/product/3/b/70x77/3bhk--1001---1500-sq-ft--intense-deep-cleaning-3bhk--1001---1500-sq-ft--intense-deep-cleaning-fums05.jpg"></img> 
          <h3 style={{color:"white"}} >Arjun</h3>
<Typography style={{color:"white"}} component="legend">Controlled</Typography>
<Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />
          <h4 style={{color:"white"}} >  <AiIcons.AiOutlinePhone />
          879756789
          </h4>
          <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:arjun@gmail.com</a> 
      </div>
      <div className="name">
      <img  width="200"  src="https://ii1.pepperfry.com/media/catalog/product/2/b/70x77/2bhk--601---1000-sq-ft-amc--basic-deep-cleaning-2bhk--601---1000-sq-ft-amc--basic-deep-cleaning-tdkt4m.jpg"></img> 
          <h3 style={{color:"white"}} >Aravind</h3>
<Typography style={{color:"white"}} component="legend">Controlled</Typography>
<Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />
          <h4 style={{color:"white"}} >  <AiIcons.AiOutlinePhone />
          879756789
          </h4>
          <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:Aravind@gmail.com</a>
      </div>
      <div className="name">
      <img  src="https://nextdaycleaning.com/wp-content/uploads/2019/10/carpet-cleaning-hero-imageres2.jpg"></img> 
          <h3 style={{color:"white"}} >Sam</h3>
<Typography style={{color:"white"}} component="legend">Controlled</Typography>
<Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />
          <h4 style={{color:"white"}} >  <AiIcons.AiOutlinePhone />
          879756789
          </h4>
          <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:sam@gmail.com</a>
      </div>
      <div className="name">
      <img width="200" src="https://fantasticcleaners.com.au/blog/wp-content/uploads/2018/01/speed-cleaning-tips-bloggers-min.jpg"></img> 
          <h3 style={{color:"white"}} >Akash</h3>
<Typography style={{color:"white"}} component="legend">Controlled</Typography>
<Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />
          <h4 style={{color:"white"}} >  <AiIcons.AiOutlinePhone />
          879756789
          </h4>
          <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:akash@gmail.com</a>
      </div>
      <div className="name">
          <img  src="https://previews.123rf.com/images/elnur/elnur1708/elnur170800911/83552034-man-doing-cleaning-at-home.jpg"></img> 
          <h3 style={{color:"white"}} >Kesav</h3>
<Typography style={{color:"white"}} component="legend">Controlled</Typography>
<Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />
          <h4 style={{color:"white"}} >  <AiIcons.AiOutlinePhone />
          879756789
          </h4>
          <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:kesav@gmail.com</a> 
      </div>
        </div>
       <br/>
      




       
        </div>
            
    )
}