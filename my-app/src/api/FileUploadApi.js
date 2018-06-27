import Axios from 'axios';

const BaseUrl = "http://localhost:61645/api/fileupload/"

class FileUploadApi {
    static FileInsert(data, success, error) {
        Axios.post(BaseUrl, data, { withCredentials: false, headers: { 'content-type': 'multipart/form-data' } })
            .then(success)
            .catch(error);
    }

    static FileById(data, success, error) {
        Axios.get(BaseUrl + data, { withCredentials: false, headers: { 'content-type': 'multipart/form-data' } })
            .then(success)
            .catch(error);
    }

    static FileGetAll(success, error) {
        Axios.get(BaseUrl + "getall", { withCredentials: false, headers: { 'content-type': 'multipart/form-data' } })
            .then(success)
            .catch(error);
    }

    static FileDelete(data, success, error) {
        Axios.delete(BaseUrl + data, { withCredentials: false })
            .then(success)
            .catch(error);
    }
}
export default FileUploadApi;