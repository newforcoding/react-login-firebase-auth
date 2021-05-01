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
  const {currentUser,updateEmail,updatePassword} = useAuth()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const history = useHistory()

function handleSubmit(e){
   e.preventDefault()
   console.log(e)

   if(passwordRef.current.value !== confirmpasswordRef.current.value) {
     return setError("Password do not match")
   }

   const promises = [] 
   if(emailRef.current.value !== currentUser.email){
       promises.push(updateEmail(emailRef.current.value))
   }

   if(passwordRef.current.value){
    promises.push(updatePassword(passwordRef.current.value))
  }

    Promise.all(promises).then(()=>{
        history.push('/')
    }).catch(()=>{
        setError("Failed to update account")
    }).finally(()=>{
       setLoading(false)
    })
   try{
     setError('')
     setLoading(true)
    //  await signup(emailRef.current.value,passwordRef.current.value)
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
              <h2 className='text-center mb-4'>Update Profile</h2>
             {error && <Alert severity="error">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                 <Form.Label>Email</Form.Label>
                 <Form.Control type='email' ref={emailRef} required
                  defaultValue={currentUser.email}/>
                </Form.Group>
              
                <Form.Group id='password'>
                 <Form.Label>Password</Form.Label>
                 <Form.Control type='password' ref={passwordRef}  placeholder="Leave as same"/>
                </Form.Group>
              
                <Form.Group id='confirmPassword'>
                 <Form.Label>Confirm Password</Form.Label>
                 <Form.Control type='password' ref={confirmpasswordRef} placeholder="Leave as same"/>
                </Form.Group>
              
              <Button disabled={loading} type='submit' className='w-100'>Update</Button>
              </Form>
            </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
           
              <Link to='/'>Cancel</Link>
           </div>
           </div>
          <div/>
         </Grid>
      </Grid>
    </div>
  );
 }

export default SignUp