import React from 'react'
import './Details.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as AiIcons from 'react-icons/ai';
export default function AllFoodsDetails()
{
    const [value, setValue] = React.useState(4);
    return (
      
        
        <div >
          <h1>Meals<img width="70" src="https://thumbs.dreamstime.com/z/south-indian-meals-served-banana-leaf-traditional-cuisine-57371591.jpg"></img></h1>
          <div className="wrapper">
          <div className="name">

              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  width="300"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpS68YnXktnR7r9RAUBmVhVVt8wJC0DkgFNQ&usqp=CAU"></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img width="200" src="https://www.superprof.co.in/images/teachers/teacher-home-learn-the-art-making-pizza-with-marco-graziani-certificate-italian-pizza-chef-from-the-avpn-associazione-verace-pizza.jpg"></img> 
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
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSOxY0mMrZM5ESB7mN1RYCZJdc874Sr3j4Q&usqp=CAU"></img> 
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
            {/* <br/>
            <h1>Double Cheese Margherita</h1>
          <div className="wrapper">
          <div className="name">

              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
            </div>
            <br/>
            <h1>Farm House</h1>
          <div className="wrapper">
          <div className="name">

              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
            </div>




            <br/>
            <h1>Peppy Paneer</h1>
          <div className="wrapper">
          <div className="name">

              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
            </div>




            <br/>
            <h1>Mexican Green Wave</h1>
          <div className="wrapper">
          <div className="name">

              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
            </div>





            <br/>
            <h1>Veg Extravaganza</h1>
          <div className="wrapper">
          <div className="name">

              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
          <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
              <img  src="https://media.istockphoto.com/photos/chef-holding-pizza-picture-id836555658?k=6&m=836555658&s=612x612&w=0&h=BdNPppTXyc1aBSqSoWiCX3RXyVGDEhFLWWdwt4JwttU="></img> 
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
            </div> */}
            </div>
            
    )
}