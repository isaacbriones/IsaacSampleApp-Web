import Axios from 'axios';

let baseUrl = "http://localhost:61645/api/webscraper";

class WorkoutPlanApi {
    static GetPlans(success, error) {
        Axios.get(baseUrl, { withCredentials: false })
            .then(success)
            .catch(error);
    }
}
export default WorkoutPlanApi;