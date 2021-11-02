import React from 'react'
import {Grid,Paper,Avatar,Typography,TextField} from '@material-ui/core'
import { Button } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const Signin=()=>
{
    const paperStyle={padding:'30px 20px',width:300, height:300,margin:' 100px 800px '}
    const headerStyle={margin:0}
    return (
        <Grid>
          <Paper elevation={20} style={paperStyle}>
              <Grid align='center'>

                     
              <Avatar style={{backgroundColor:'chocolate'}}>
              <LockOpenOutlinedIcon/>
                  </Avatar>

                  <h2 style={headerStyle}>Sign In</h2>
                  <Typography variant='caption'>Please fill this form to login to your account ..!</Typography>

              </Grid>
              <form>

<TextField fullWidth label = 'Email' placeholder="Enter your Email"/>
<TextField fullWidth label = 'Password' type="password" placeholder="Enter your password"/>
<Button    href="http://localhost:3000/appadmin" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>Sign in </Button>
</form>
    
              
          </Paper>
        
        </Grid>
    )
}
export default Signin;