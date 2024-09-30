import { CURRENT_USER, DELETE_USER, ERROR_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, RESET_PASSWORD } from "../ActionTypes/ActionTypes";
import axios from "axios";

// Action pour la connexion utilisateur
export const loginUser = (email, password) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const response = await axios.post('http://localhost:8000/api/user/login', { email, password });
        dispatch({
            type: LOGIN_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error
        });
    }
};

// Action pour l'inscription utilisateur
export const registerUser = (newUser) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const response = await axios.post('http://localhost:8000/api/user/register', newUser);
        dispatch({
            type: REGISTER_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error
        });
    }
};

// Action pour la suppression d'utilisateur
export const deleteUser = (_id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const response = await axios.delete(`http://localhost:8000/api/user/delete/${_id}`);
        dispatch({
            type: DELETE_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error.response?.data?.message || error.message
        });
    }
};

// Action pour réinitialiser le mot de passe utilisateur
export const resetPasswordUser = (_id, newPassword) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const response = await axios.put(`http://localhost:8000/api/user/resetPassword/${_id}`, newPassword);
        dispatch({
            type: RESET_PASSWORD,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error
        });
    }
};
//

// Action pour obtenir l'utilisateur actuel
export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: { authorization: localStorage.getItem('token') }
        };
        const response = await axios.post("http://localhost:8000/api/user/current", config);
        dispatch({
            type: CURRENT_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error
        });
    }
};
//action loGout
export const logoutUser = () =>(dispatch)=>{
    try {
        dispatch({
            type: LOGOUT_USER,
            payload: null
        })
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error
        });
    }
}
