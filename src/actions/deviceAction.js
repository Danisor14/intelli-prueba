import clientAxios from "../config/clientAxios";
import { GETDEVICES, LOADMORE } from "../Types";

let offset = 0;

export function getDevices(searchData) {

    offset = 0;

    return async (dispatch) => {
        const url = `devices?limit=5&offset=${offset}&search=${searchData}`;
        const token = JSON.parse(localStorage.getItem('user')).userData.token;

        const deviceAxios = clientAxios(token);

        try { 
            let response = await deviceAxios.get(url);
            
            dispatch(getDeviceDispatch(response.data.data.results));

        } catch (error) {
            console.log(error);
        } 
    }
}
 
const getDeviceDispatch = (data) => ({
    type: GETDEVICES,
    payload: data
});


export function loadMore(searchData) {
  offset += 5;

  return async (dispatch) => {
    const url = `devices?limit=5&offset=${offset}&search=${searchData}`;
    const token = JSON.parse(localStorage.getItem("user")).userData.token;

    const deviceAxios = clientAxios(token);

    try {
      let response = await deviceAxios.get(url);

      dispatch(loadMoreDispatch(response.data.data.results));
    } catch (error) {
      console.log(error);
    }
  };
}

const loadMoreDispatch = (data) => ({
  type: LOADMORE,
  payload: data,
});