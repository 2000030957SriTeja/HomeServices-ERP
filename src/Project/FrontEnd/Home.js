import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Footer from './Footer'
export default function Home()
{
    /* const slideImages = [
        {
          url: 'homec.jpg',
          caption: 'Slide 1',
        
        },
        {
          url: 'homep.jpg',
          caption: 'Slide 2'
        },
      ];
      
      const Slideshow = () => {
          return (
            <div  className="each-slide">
              <Slide >
               {slideImages.map((slideImages, index)=> (
                  <div className="each-slide" key={index}>
                      
                    <div  className="each-slide" style={{'backgroundImage': `url(${slideImages.url})` ,width:"300",height:"300"}}>
                     <span>{slideImages.caption}</span>
                    </div>
                  </div>
                  
                ))} 
              </Slide>
            </div>
          )
      } */
    return (
        <div >
  {/* <h1 style={{color:'#C4A53E'}}><u>WELCOME TO OUR SERVICES</u></h1>
  <div className="each-slide"> */}
  {/* <Slideshow></Slideshow> */}
  
  <h1 style={{color:'#C4A53E'}}><u>WELCOME TO OUR SERVICES</u></h1>
  <div className="responsive-image__image" >
  <img src="./homes.jpg" width="1000" height="900"></img>
  </div>
<div className="main-footer">
 <Footer/>
 </div> 
  
  </div>
        
    );
}
