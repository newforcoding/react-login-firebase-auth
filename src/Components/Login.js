import React, {useState, useRef } from 'react';
import {Grid} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../Context/AuthContext';
import {Card,Form,Button} from 'react-bootstrap'

function Login(){
      const emailRef = useRef()
      const passwordRef = useRef()
      const {login } = useAuth()
      const [error,setError] = useState('')
      const [loading,setLoading] = useState(false)
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
       setLoading(false)
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
           <Card>
            <Card.Body>
              {error && <Alert severity="error">{error}</Alert>}
              <h2 className='text-center mb-4'>Log In</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                 <Form.Label>Email</Form.Label>
                 <Form.Control type='email' ref={emailRef} required/>
                </Form.Group>
              
                <Form.Group id='password'>
                 <Form.Label>Password</Form.Label>
                 <Form.Control type='password' ref={passwordRef} required/>
                </Form.Group>
              
               <Button type='submit' disable={loading} className='w-100'>Login</Button>
              </Form>
            
              <div className='w-100 text-center mt-3'>
                <Link to='/forgetpassword'>
                  Forget Password?
                  </Link>
               </div>   
            
              </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
              Already have an account? 
              <Link to='/signup'>Sign up </Link>
           </div>
            </div>
           <div/>
           </Grid>
       </Grid>
    </div>
    );
}
export default Login