import axios from "axios";
import { LOGIN, LOGOUT, LOGINERROR, CLEANERROR } from "../Types";

export function login(user) {
  return async (dispatch) => {
    const url = "https://api.dev.myintelli.net/v1/login";

    try {
      let response = await axios.post(url, {
        email: user.email,
        password: user.password,
      });

      const initialState = {
        logged: true,
        userData: response.data,
        devices: []
      };

      localStorage.setItem("user", JSON.stringify(initialState));
      dispatch(loginDispatch(response.data));
    } catch (error) {
      dispatch(loginError(error.response.data));
    }
  };
}

const loginDispatch = (data) => ({
  type: LOGIN,
  payload: data,
});

export function logOut() {
  return (dispatch) => {
    localStorage.removeItem("user");

    dispatch({
      type: LOGOUT,
    });
  };
}

function loginError(errorData) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: CLEANERROR,
      });
    }, 4500);

    dispatch({
      type: LOGINERROR,
      payload: errorData,
    });
  };
}


