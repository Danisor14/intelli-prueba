import axios from 'axios'
import { LOGIN, LOGOUT } from "../Types";

export function login(user) {
    return async (dispatch) => {
        const url = "https://api.dev.myintelli.net/v1/login";

        try { 
            let response = await axios.post(url, 
                {
                    "email": user.email,
                    "password": user.password 
                }
            )
            
            const initialState = {
                logged: true,
                userData: response.data
            }

            localStorage.setItem('user', JSON.stringify(initialState));
            dispatch(loginDispatch(response.data));

        } catch (error) {
            console.log(error);
        } 
    }
}

const loginDispatch = (data) => ({
    type: LOGIN,
    payload: data
})


export function logOut() {
    return (dispatch) => {
        localStorage.removeItem('user');

        dispatch({
            type: LOGOUT,
        })
    }
}