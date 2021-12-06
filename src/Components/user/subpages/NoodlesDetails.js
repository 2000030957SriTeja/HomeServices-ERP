import React from 'react'
import './Details.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as AiIcons from 'react-icons/ai';
export default function NonvegthaliDetails()
{
    const [value, setValue] = React.useState(4);
    return (
      
      <div >
      <h1>Egg noodles<img width="60" src="https://www.spicypunch.com/wp-content/uploads/2021/09/egg-noodles-recipe.jpg"></img></h1>
      <div className="wrapper">
      <div className="name">

          <img  src="https://t3.ftcdn.net/jpg/03/35/63/86/240_F_335638623_SkUiPT8btwia2G437NGHZXxGJ294BJwU.jpg"></img> 
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
      <img  width="300"  src="https://furamavietnam.com/wp-content/uploads/2020/02/Indian-Chef-Tamilarasan-Perumal-Joining-The-Culinary-Experts-At-Furama-Resort-Danang-The-Culinary-Beach-Resort-In-Vietnam-768x512.jpg"></img> 
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
      <img  src="https://st3.depositphotos.com/1252160/14550/i/1600/depositphotos_145504789-stock-photo-indian-chef-decorating-food-in.jpg"></img> 
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
      <img width="200" src="http://www.shangri-la.com/uploadedImages/Shangri-la_Hotels/Bangkok,_Shangri-La/dining/restaurants/next2/chef%20Singh,%20297x284.jpg?width=297&height=284&mode=crop&quality=80"></img> 
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
        <h1> Chicken Noodles<img width="100" src="https://www.licious.in/blog/wp-content/uploads/2020/12/Sesame-Chicken-Noodles.jpg"></img></h1>
      <div className="wrapper">
      <div className="name">

          <img  src="https://media.istockphoto.com/photos/pretty-baker-smiling-at-camera-picture-id535476743"></img> 
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
          <AiIcons.AiOutlineMail /> <a  href={"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"}>Email:angelina@gmail.com</a>
      </div>
      <div className="name">
      <img  src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-07/westin-sardini-fest%20%281%29.jpg"></img> 
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
      <img  src="https://images.edexlive.com/uploads/user/imagelibrary/2019/1/30/original/Ms.JPG?w=480&dpr=1.5g"></img> 
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
          <img  src="https://t3.ftcdn.net/jpg/01/78/11/62/240_F_178116233_8By1HOHtDF2nBwSQrDu9nHMOMPgTVgpU.jpg"></img> 
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
        <h1>Manchuria Noodles<img  width="70" src="https://envato-shoebox-0.imgix.net/4286/9bf8-530f-4780-8f62-9bd453ee1515/DSC_5016.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=a2ad5b7bc9f0db604136ce46862faadc"></img></h1>
      <div className="wrapper">
      <div className="name">

          <img  src="https://s3.envato.com/files/234331377/syda_0236500.jpg"></img> 
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
      <img  src="https://image.shutterstock.com/image-photo/health-safety-pandemic-concept-male-600w-1698308851.jpg"></img> 
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
      <img  height="200"src="https://d207ibygpg2z1x.cloudfront.net/image/upload/dpr_2.3,q_auto:eco,w_540/v1/articles_upload/main/oxbcltmkx06zuumafyjx"></img> 
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
      <img  src="https://s3.envato.com/files/233965289/syda_0231662.jpg"></img> 
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
          <img  src="https://s3.envato.com/files/233965289/syda_0231662.jpg"></img> 
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




       
        </div>
            
    )
}