import React from 'react'
import './Details.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as AiIcons from 'react-icons/ai';
export default function PizzaDetails()
{
    const [value, setValue] = React.useState(4);
    return (
      
        
        <div >
          <h1>Margherita</h1>
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
          <img  src="https://th.bing.com/th/id/OIP.EL0Exea5SVqbFNy6vMuTRwHaFL?pid=ImgDet&rs=1"></img> 
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
           <br/>
            <h1>Double Cheese Margherita</h1>
          <div className="wrapper">
          <div className="name">

              <img  src="https://th.bing.com/th/id/OIP.FcEM2A40JzggPB_nQUFHQQHaE7?w=273&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img> 
              <h3 style={{color:"white"}} >Snehitha</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:Snehitha@gmail.com</a> 
          </div>
          <div className="name">
          <img  src="https://th.bing.com/th/id/OIP.2c-3haWWIBJPlov-caI3lgHaFW?pid=ImgDet&rs=1"></img> 
              <h3 style={{color:"white"}} >Angelina</h3>
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
          <img  src="https://thumbs.dreamstime.com/b/male-chef-smiles-takes-out-baking-tray-hot-pizza-tomatoes-olives-background-bright-kitchen-cooking-male-chef-180604060.jpg"></img> 
              <h3 style={{color:"white"}} >William</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:william@gmail.com</a>
          </div>
          <div className="name">
          <img  src="https://thumbs.dreamstime.com/z/female-chef-remove-fresh-italian-pizza-stove-female-chef-remove-fresh-italian-pizza-stove-tasty-italian-fast-food-137585126.jpg"></img> 
              <h3 style={{color:"white"}} >Gabriella</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:Gabriella@gmail.com</a>
          </div>
          <div className="name">
              <img  src="https://thumbs.dreamstime.com/b/chef-cooking-pizza-oven-prepares-view-inside-81400548.jpg"></img> 
              <h3 style={{color:"white"}} >James</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:James@gmail.com</a> 
          </div>
            </div>
            <br/>
            <h1>Farm House</h1>
          <div className="wrapper">
          <div className="name">

              <img  src="https://thumbs.dreamstime.com/z/male-chef-italian-pizza-bistro-smiling-holding-baked-71713609.jpg"></img> 
              <h3 style={{color:"white"}} >Chaitanya</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:chaitanya@gmail.com</a> 
          </div>
          <div className="name">
          <img  src="https://media.gettyimages.com/photos/chef-making-pizza-picture-id155134891"></img> 
              <h3 style={{color:"white"}} >Gowtham</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:gowtham@gmail.com</a>
          </div>
          <div className="name">
          <img  height="200"src="https://th.bing.com/th/id/OIP._M39ONACk_zFeJJnFxkNYwHaEK?pid=ImgDet&rs=1"></img> 
              <h3 style={{color:"white"}} >Reshma</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:Reshma@gmail.com</a>
          </div>
          <div className="name">
          <img  src="https://media.istockphoto.com/photos/female-chef-giving-cooked-pizza-to-waitress-picture-id1148042624?k=6&m=1148042624&s=170667a&w=0&h=4se0WLvjFW7I1_7KxNF7xE3mBh1eOFUInVKMg5_0AOI="></img> 
              <h3 style={{color:"white"}} >Akshara</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:akshara@gmail.com</a>
          </div>
          <div className="name">
              <img  src="https://thumbs.dreamstime.com/b/young-chef-making-pizza-kitchen-happy-giving-finishing-touch-to-40593687.jpg"></img> 
              <h3 style={{color:"white"}} >Ariyan</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:ariyan@gmail.com</a> 
          </div>
            </div>




            <br/>
            <h1>Peppy Paneer</h1>
          <div className="wrapper">
          <div className="name">

              <img  src="https://thumbs.dreamstime.com/z/pizza-chef-9527646.jpg"></img> 
              <h3 style={{color:"white"}} >Joseph</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:joseph@gmail.com</a> 
          </div>
          <div className="name">
          <img  src="https://thumbs.dreamstime.com/b/young-female-chef-tastes-vegan-pizza-cheese-young-female-chef-tastes-vegan-pizza-cheese-198152442.jpg"></img> 
              <h3 style={{color:"white"}} >Mia</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:Mia@gmail.com</a>
          </div>
          <div className="name">
          <img  src="https://st2.depositphotos.com/2896569/9567/i/950/depositphotos_95679546-stock-photo-chef-is-cooking-the-best.jpg"></img> 
              <h3 style={{color:"white"}} >paul</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:Paul@gmail.com</a>
          </div>
          <div className="name">
          <img  src="https://thumbs.dreamstime.com/b/young-female-making-pizza-3206579.jpg"></img> 
              <h3 style={{color:"white"}} >Betina</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:Betina@gmail.com</a>
          </div>
          <div className="name">
              <img  src="https://th.bing.com/th/id/OIP.0PN0W-7OoPuIVocZwKqstgHaE6?pid=ImgDet&w=1040&h=690&rs=1"></img> 
              <h3 style={{color:"white"}} >Bina</h3>
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
              <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:Bina@gmail.com</a> 
          </div>
            </div>




            <br/>
          
            </div>
            
    )
}

