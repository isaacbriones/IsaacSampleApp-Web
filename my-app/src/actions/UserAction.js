import Axios from 'axios';

const BaseUrl = "http://localhost:61645/api/user/";

export function loginUser(data) {
    return {
        type: "SET_LOGIN_STATE",
        payload: Axios.post(BaseUrl + "login", data, { withCredentials: false })
            .then(resp => resp.data)
            .catch(error => {
            })
    };
}

export function logoutUser() {
    return {
        type: "SET_LOGOUT_STATE",
        payload: Axios.get(BaseUrl + "logout", { withCredentials: false })
            .then(success => !success.data.isSuccessful)
            .catch(error => {
            })
    };
}

export function loginStatus() {
    return {
        type: "CHECK_LOGIN_STATE",
        payload: Axios.get(BaseUrl + "current", { withCredentials: true })
            .then(resp => resp.data)
            .catch(error => {
            })
    };
}