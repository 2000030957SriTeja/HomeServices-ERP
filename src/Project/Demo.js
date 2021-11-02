import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import Navbar from './Navbar'
import RountingDemo from './RoutingDemo'
import Home1 from './Home'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
     
      margin: theme.spacing(1),
    },
    
  },
}));

export default function Demo() {
  const classes = useStyles();
  function Demo1()
  {

  }

  return (
    <div className={classes.root}>
        <center>
   {/*    <Button variant="contained">Default</Button> */}
   <Button  style={{color : 'blue'}} id = "updateBtn" size="extra large" href="http://localhost:3000/home" startIcon={<HomeIcon />}>Home
  
   </Button>
      <Button style={{color : 'Red'}} id = "updateBtn"  size="extra large"   startIcon={<InfoIcon />}>Aboutus</Button>
      <Button  style={{color : 'green'}} id = "updateBtn"  size="extra large" startIcon={< CallIcon/>}>Contact</Button>

      </center>
    </div>
  );
}
