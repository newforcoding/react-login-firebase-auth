import React, {useState, useRef } from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../Context/AuthContext';


function Login(){
      const emailRef = useRef()
      const passwordRef = useRef()
      const {login} = useAuth()
      const [error,setError] = useState('')
      const history = useHistory()
    
     async function handleSubmit(e){
       e.preventDefault()
    
       try{
         setError('')
         await login(emailRef.current.value,passwordRef.current.value)
         history.push('/')
       }catch{
         setError('Failed to sign in')
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
           <div style={{display:"flex",flexDirection:"column",
                 minWidth:400, maxWidth:300
                 }}>
                         {error && <Alert severity="error">{error}</Alert>}
           <TextField label='Email'
                      type='text' 
                      placeholder='Email' 
                      autoComplete='off' 
                      margin='normal'
                      ref={emailRef}
                      required
                      />
           <TextField label='Password' 
                      type='password' 
                      placeholder='Password' 
                      autoComplete='off' 
                      margin='normal'
                      ref={passwordRef}
                      required
                      />
           <div style={{height:20}}/>
           <Button color='primary' 
                   variant="contained" 
                   type='submit' 
                   onClick={handleSubmit}
           style={{margin:'8px 0px'}}>  
           Login
           </Button>
           <div style={{padding:'5px',textAlign:'center'}}>Don't have an account?<Link to='/signup' 
                    style={{color:"blue",
                            fontSize:'15px',
                            display:'grid'
                            }}>
              Sign up
               </Link>
           </div>   
          
             <Link to='/resetpassword' 
                   style={{color:"blue",fontSize:'15px',marginLeft:"36%",
                  }}> 
                   Forget Password?
            </Link>
            </div>
           <div/>
           </Grid>
       </Grid>
    </div>
    );
}
export default Login