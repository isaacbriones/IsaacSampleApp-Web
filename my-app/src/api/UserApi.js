import Axios from 'axios';

let baseUrl = "http://localhost:61645/api/user/"

class UserApi {
    static Register(data, success, error) {
        Axios.post(baseUrl + "register", data, { withCredentials: false })
            .then(success)
            .catch(error);
    }
    static Login(data, success, error) {
        Axios.post(baseUrl + "login", data, { withCredentials: false })
            .then(success)
            .catch(error);
    }
}
export default UserApi;