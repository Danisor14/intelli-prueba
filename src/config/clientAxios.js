import axios from "axios";
 
const clientAxios = (token) => {
    const apiUrl = "https://api.dev.myintelli.net/v1/";

    const deviceAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return deviceAxios

}

export default clientAxios

