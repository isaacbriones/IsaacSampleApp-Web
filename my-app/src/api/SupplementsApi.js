import Axios from 'axios';

let baseUrl = "http://localhost:61645/api/supplement"

class SupplementApi {
    static Insert(data, success, error) {
        Axios.post(baseUrl, data, { withCredentials: false })
            .then(success)
            .catch(error);
    }
    static Update(id, data, success, error) {
        Axios.put(baseUrl + "/" + id, data, { withCredentials: false })
            .then(success)
            .catch(error);
    }
    static SelectById(data, success, error) {
        Axios.get(baseUrl, data, { withCredentials: false })
            .then(success)
            .catch(error);
    }
    static SelectAll(success, error) {
        Axios.get(baseUrl + "/getall", { withCredentials: false })
            .then(success)
            .catch(error);
    }
    static Delete(id, success, error) {
        Axios.delete(baseUrl + "/" + id, { withCredentials: false })
            .then(success)
            .catch(error);
    }
}
export default SupplementApi;