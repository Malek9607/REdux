import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/Actions/UserActions';

function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const user= useSelector(state=>state.UserReducer.user)
  const handleClick=()=>{
      dispatch(loginUser(email,password))
  }
  useEffect(()=>{
    if(user){
      navigate("/profile")
    }
  },[user])
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={handleClick} >
        Submit
      </Button>
    </Form>
  );
}

export default Login;