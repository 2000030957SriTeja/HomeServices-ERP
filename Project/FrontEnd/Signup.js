import React from 'react'
import {Grid,Paper,Avatar,Typography,TextField} from '@material-ui/core'
import { Button } from '@material-ui/core';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signup=()=>
{
  
    const paperStyle={padding:'30px 20px',width:300, height:480,margin:' 100px 800px '}
    const headerStyle={margin:0}
    return (
        <Grid>
          <Paper elevation={20} style={paperStyle}>
              <Grid align='center'>

                     
              <Avatar style={{backgroundColor:'chocolate'}}>
              <PersonAddSharpIcon/>
                  </Avatar>

                  <h2 style={headerStyle}>Sign Up</h2>
                  <Typography variant='caption'>Please fill this form to create an account..!</Typography>

              

              </Grid>
              <form>
<TextField fullWidth label ='Name' placeholder="Enter your name"/>
<TextField fullWidth label = 'Email' placeholder="Enter your Email"/>
<FormControl component="fieldset" align='left'>
  <FormLabel component="legend" style={{marginTop:5,textAlign:'left'}}>Gender</FormLabel>
  <RadioGroup aria-label="gender" style={{textAlign:'left', display:'initial'}} name="gender1" >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>
<TextField fullWidth label ='Phone Number' placeholder="Enter your Phonenumber"/>
<TextField fullWidth label = 'Password' type="password" placeholder="Enter your password"/>
<TextField fullWidth label = 'Confirm Password'  type="password" placeholder="Confirm your password"/> <br/>
<FormControlLabel
        control={<Checkbox  name="checkedA" />}
        label=" I accept the Terms and Conditions"
      /> <br/>
<Button href="http://localhost:3000/signin" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>Sign Up </Button>
</form>
          </Paper>
        
        </Grid>
    )
}
export default Signup;