import React, {useState, useRef } from 'react';
import {Grid} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {Link} from 'react-router-dom';
import {useAuth} from '../Context/AuthContext';
import {Card,Form,Button} from 'react-bootstrap'

function ForgetPassword(){
      const emailRef = useRef()
      const {resetPassword} = useAuth()
      const [error,setError] = useState('')
      const [loading,setLoading] = useState(false)
      const [message,setMessage] = useState('')
    
     async function handleSubmit(e){
       e.preventDefault()
    
       try{
         setMessage('')
         setError('')
         setLoading(true)
         await resetPassword(emailRef.current.value)
         setMessage('Check your inbox for further instruction ')
       }catch{
         setError('Failed to reset password')
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
              {message && <Alert severity='success'>{message}</Alert>}
              {error && <Alert severity="error">{error}</Alert>}
              <h2 className='text-center mb-4'>Reset Password</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                 <Form.Label>Email</Form.Label>
                 <Form.Control type='email' ref={emailRef} required/>
                </Form.Group>
              
               <Button type='submit' 
               disable={loading} 
               className='w-100'>Reset Password</Button>
              </Form>
              <div className='w-100 text-center mt-3'>
                <Link to='/login'>
                  Login
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
export default ForgetPassword