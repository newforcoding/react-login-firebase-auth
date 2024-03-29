import React, {useState, useRef}  from 'react';
import { Card,Form,Button} from 'react-bootstrap';
import Alert from '@material-ui/lab/Alert';
// import {Form} from 'antd';
import {Grid} from '@material-ui/core'
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../Context/AuthContext';

function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmpasswordRef = useRef()
  const {signup,currentUser} = useAuth()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const history = useHistory()

 async function handleSubmit(e){
   e.preventDefault()
   console.log(e)
   

   if(passwordRef.current.value !== confirmpasswordRef.current.value) {
     return setError("Password do not match")
   }
   try{
     setError('')
     setLoading(true)
     await signup(emailRef.current.value,passwordRef.current.value)
     console.log(emailRef,passwordRef)
     history.push('/')
   }catch{
     setError('Failed to create account ')
     console.log('Failed to create account ')
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
          <Card>
            <Card.Body>
             {error && <Alert severity="error">{error}</Alert>}
              <h2 className='text-center mb-4'>Sign Up</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                 <Form.Label>Email</Form.Label>
                 <Form.Control type='email' ref={emailRef} required/>
                </Form.Group>
              
                <Form.Group id='password'>
                 <Form.Label>Password</Form.Label>
                 <Form.Control type='password' ref={passwordRef} required/>
                </Form.Group>
              
                <Form.Group id='confirmPassword'>
                 <Form.Label>Confirm Password</Form.Label>
                 <Form.Control type='password' ref={confirmpasswordRef} required/>
                </Form.Group>
              
              <Button disabled={loading} type='submit' className='w-100'>Sign Up</Button>
              </Form>
            </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
              Already have an account? 
              <Link to='/login'>Log in</Link>
           </div>
           </div>
          <div/>
         </Grid>
      </Grid>
    </div>
  );
 }

export default SignUp