import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import {Link} from 'react-router-dom'

function Login(){
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
           <div style={{display:"flex",flexDirection:"column",
                 minWidth:400, maxWidth:300
                 }}>
           <TextField label='Username'
                      type='text' 
                      placeholder='Username' 
                      autoComplete='off' 
                      margin='normal'
                      required
                      />
           <TextField label='Password' 
                      type='password' 
                      placeholder='Password' 
                      autoComplete='off' 
                      margin='normal'
                      required
                      />
           <div style={{height:20}}/>
           <Button color='primary' 
                   variant="contained" 
                   type='submit' 
           style={{margin:'8px 0px'}}>  
           Login
           </Button>
           <div style={{padding:'5px',textAlign:'center'}}>Don't have an account ?
              {/* <Link to='/register' 
                    style={{color:"blue",
                            fontSize:'15px',
                            marginLeft:"40%",
                            display:'flex'}}>
              Sign up
               </Link> */}
           </div>   
          
             {/* <Link to='/resetpassword' 
                   style={{color:"blue",fontSize:'15px',marginLeft:"36%",
                  }}> 
                   Forget Password?
            </Link> */}
            </div>
           <div/>
           </Grid>
       </Grid>
    </div>
    );
}
export default Login