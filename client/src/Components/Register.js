import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/Actions/UserActions';
const Register = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [age,setAge]=useState(0)
    const [photo,setPhoto]=useState("")
    const [phone,setPhone]=useState("")
    const user= useSelector(state=>state.UserReducer.user)

    const handleClick=async()=>{
        await dispatch(registerUser({username:userName,email:email,password:password,age:age,photo:photo,phone:phone}))
  
    }
    useEffect(() => {
      if (user) {
        navigate("/profile");
      }
    }, [user]);
  return (
    <div>Register

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="username" onChange={(e)=>setUserName(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>age</Form.Label>
        <Form.Control type="number" placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)}  />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>photo</Form.Label>
        <Form.Control type="text" placeholder="Enter your photo" onChange={(e)=>setPhoto(e.target.value)}  />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>phone</Form.Label>
        <Form.Control type="phone" placeholder="Enter your phone" onChange={(e)=>setPhone(e.target.value)}  />
        
      </Form.Group>

      
      
      <Button variant="primary" onClick={handleClick} >
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default Register