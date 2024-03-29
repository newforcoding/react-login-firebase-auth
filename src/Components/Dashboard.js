import React,{useState} from 'react';
import {Card,Button } from 'react-bootstrap';
import Alert from '@material-ui/lab/Alert';
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../Context/AuthContext';

function Dashboard() {
    const [error,setError] = useState('')
    const {currentUser,logout} = useAuth()
    const history = useHistory()

   async function handleLogOut(){
       console.log(currentUser.email)
    setError('')
       try{
        await logout()
        history.push('/login')
        }catch{
            setError('Failed to log out')

        }
    }
    return (
        <div>
           <Card>
              <Card.Body>
                <h2 className='text-center mb-4'> Profile </h2> 
                {error && <Alert severity="error">{error}</Alert>}
                  <strong>Email:</strong>
                   {currentUser.email}
                  <Link to='/update-profile' 
                        className='btn btn-primary w-100 mt-3'>
                            Update Profile
                        </Link>
               </Card.Body>
           </Card>
           <div className='w-100 text-center mt-2'>
             <Button variant='link' onClick={handleLogOut}>
                 Log Out
              </Button> 
            </div>
        </div>
    )
}

export default Dashboard
