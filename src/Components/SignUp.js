import React, {useState, useRef}  from 'react';
import { Grid,TextField,Button} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../Context/AuthContext';

function SignUp() {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmpasswordRef = useRef()
  const {signup} = useAuth()
  const [error,setError] = useState('')
  const history = useHistory()

 async function handleSubmit(e){
   e.preventDefault()

   if(passwordRef.current.value !== confirmpasswordRef.current.value) {
     return setError("Password do not match")
   }
   try{
     setError('')
     await signup(emailRef.current.value,passwordRef.current.value)
     history.push('/')
   }catch{
     setError('Failed to create account ')
   }
  }
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
                   {error && <Alert severity="error">{error}</Alert>}
           <TextField label='Full Name' 
                      type='text' 
                      placeholder='Full Name' 
                      margin='normal' 
                      autoComplete='off'
                      ref={userNameRef}
                      required
                      />
           <TextField label='Email' 
                      type='text' 
                      placeholder='Email' 
                      margin='normal' 
                      autoComplete='off'
                      ref={emailRef}
                      required
                      />
           <TextField label='Password' 
                      type='password' 
                      placeholder='password' 
                      margin='normal'
                      autoComplete='off'
                      ref={passwordRef}
                      required
                      />
           <TextField label='Comfirm Password' 
                      type='password' 
                      placeholder='confirm password' 
                      margin='normal'
                      autoComplete='off'
                      ref={confirmpasswordRef}
                      required
                      />
           <div style={{height:10}}/>
            <Button color='primary' 
                    variant="contained" 
                    type='submit'
                    onClick={handleSubmit}
                    >
             Sign Up
           </Button>
            <Link to='/login' 
                  style={{color:"blue",
                          fontSize:'15px',
                          textAlign:'center',
                          marginTop:'15px'
                        }}>
              Login
            </Link>
           </div>
          <div/>
         </Grid>
      </Grid>
    </div>
  );
 }

export default SignUp