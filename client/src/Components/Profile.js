import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteUser } from '../redux/Actions/UserActions';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch= useDispatch();
  const navigate=useNavigate()
  const user=useSelector(state=>state.UserReducer.user)
  console.log(user)
  const HandleDelete=()=>{
    dispatch(deleteUser(user._id))
 
  }
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  },[user])
  return (
    <div>Profile

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user?.photo} />
      <Card.Body>
        <Card.Title>{user?.username}</Card.Title>
        <Card.Title>email:{user?.email}</Card.Title>
        <Card.Text>
          age: {user?.age}
        </Card.Text>
        <Card.Text>
          phone: {user?.phone}
        </Card.Text>
        <Button variant="primary" onClick={HandleDelete}
        >delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile