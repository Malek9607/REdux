
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navb from './Components/Navb';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from './redux/Actions/UserActions';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch=useDispatch()
  const token=localStorage.getItem("token")
  useEffect(()=>{
    if(token){
      dispatch(current())
    }
    
  },[token])
  return (
    <div className="App">
      <Navb />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
{/* Same as */}
<ToastContainer />

    </div>
  );
}

export default App;
