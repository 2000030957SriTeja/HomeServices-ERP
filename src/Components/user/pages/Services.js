import { Button } from '@material-ui/core'
import React from 'react'
import './services.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {BrowserRouter as Router,Routes,Link,Switch,Route} from 'react-router-dom';
import bgimage from './././bgimage.jpg'
import SideBar from '../SideBar';
export default function Services()
{
    const [value, setValue] = React.useState(4);
    return(
  
        <div >
          <SideBar/>
          <div className='her-image'>
            {
                             <center>
                                 <div >
                                     <div className="column">
                              <div className="Img">
                                  
                                  <img width="200" height='100' src='cleaninglogo.jpg' ></img>
                       <h1 style={{fontSize:'20px', color:"tomato"}}>Cleaning Services</h1>
                       <h4 style={{ color:"Black"}}>Cleaning</h4>
                       <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <br/>
                       {/* <button onClick={cleaning}>Click Service</button> */}
                       <Link to="/cleaning">
     <button type="button">
          Click Here
     </button>
 </Link>
                    
                 </div>
                 </div>
                 </div>
                 
                                     <div className="column">

                 <div className="Img">
                                  <img width="200" height='100' src='cookinglogo.jpg' ></img>
                       <h1 style={{fontSize:'20px', color:"tomato"}}>Cooking Services</h1>
                       <h4 style={{ color:"Black"}}>Cooking</h4>
                       <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <br/>
      <div className="Button">
      <Link to="/cooking">
     <button type="button">
          Click Here
     </button>
 </Link>
                    
                 </div>
                 </div>
                 </div>
                 <div className="column">

<div className="Img">
                 <img width="200" height='200' src='pestcontrollogo.jpg' ></img>
      <h1 style={{fontSize:'20px', color:"tomato"}}>PestControl Services</h1>
      <h4 style={{ color:"Black"}}>PestControl</h4>
      <Typography component="legend">Controlled</Typography>
<Rating
name="simple-controlled"
value={value}
onChange={(event, newValue) => {
setValue(newValue);
}}
/>
<br/>
<Link to="/pestcontrol">
     <button type="button">
          Click Here
     </button>
 </Link>
   
</div>
</div>


                 </center>   
                         
               }
            
            </div>
            </div>

            
    )
}