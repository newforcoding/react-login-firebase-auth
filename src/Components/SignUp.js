import React from 'react';
import { Grid,TextField,Button} from '@material-ui/core';
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <Grid container style={{minHeight:"100vh"}}>
       <Grid item xs={12} sm={6}>
       <img src='https://www.radzen.com/documentation/login-background.png'
               style={{ width:"100%",height:"100%",objectFit:"cover"}}
               alt="brand"
          />
         </Grid> 
         <Grid item container xs={12} sm={6} 
               direction="column" 
               justify="space-between" 
               alignItems="center" 
               style={{padding:10}}>
          <div/> 
          <div style={{display:"flex",
                      flexDirection:"column",
                      minWidth:400, maxWidth:300,
                 }}>
           <TextField label='Full Name' 
                      type='text' 
                      placeholder='Full Name' 
                      margin='normal' 
                      autoComplete='off'
                      required
                      />
           <TextField label='Email' 
                      type='text' 
                      placeholder='Email' 
                      margin='normal' 
                      autoComplete='off'
                      required
                      />
           <TextField label='Password' 
                      type='password' 
                      placeholder='password' 
                      margin='normal'
                      autoComplete='off'
                      required
                      />
           <TextField label='Comfirm Password' 
                      type='password' 
                      placeholder='confirm password' 
                      margin='normal'
                      autoComplete='off'
                      required
                      />
           <div style={{height:10}}/>
            <Button color='primary' 
                    variant="contained" 
                    type='submit'
                    >
             Sign Up
           </Button>
            {/* <Link to='/login' 
                  style={{color:"blue",
                          fontSize:'15px',
                          textAlign:'center',
                          marginTop:'15px'
                        }}>
              Login
            </Link> */}
           </div>
          <div/>
         </Grid>
      </Grid>
    </div>
  );
}

export default SignUp