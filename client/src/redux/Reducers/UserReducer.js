
//initialState

import { toast } from "react-toastify";

const { LOAD_USER, LOGIN_USER, REGISTER_USER, DELETE_USER, RESET_PASSWORD, ERROR_USER, CURRENT_USER, LOGOUT_USER } = require("../ActionTypes/ActionTypes");

const initialState={
    load:false,
    user:null,
    error:null
}

//pure function

const UserReducer=(state=initialState,{type,payload})=>{
    console.log(payload?.response)


    switch (type) {
        case LOAD_USER:
            return{...state,load:true}
        case LOGIN_USER:
            localStorage.setItem("token",payload.token)
            toast(payload.msg)
            return{...state,user:payload.foundUser,load:false}
        case REGISTER_USER:
            localStorage.setItem("token",payload.token)
            toast(payload.msg)
            return{...state,load:false,user:payload.newUser}
        case DELETE_USER:
            localStorage.removeItem("token")
            toast(payload.msg)
            return{...state,user:null,load:false}
        case RESET_PASSWORD:
            toast(payload.msg)
            return{...state,load:false}
        case ERROR_USER:
            toast(payload.response.data.msg)
            return{...state,error:payload,load:false}
        case CURRENT_USER:
            return{...state,load:false,user:payload}
        case LOGOUT_USER:  
        localStorage.removeItem("token")
        toast("lougout sucessfully")
        return{...state,user:null} 
        default:
            return state
    }
}

export default UserReducer