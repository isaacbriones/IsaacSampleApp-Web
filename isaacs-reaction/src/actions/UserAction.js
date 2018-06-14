import Axios from 'axios';

export function loginUser(data) {
    return {
        type: "SET_LOGIN_STATE",
        payload: Axios.post(
            "https://pacoima-ypi.azurewebsites.net/api/users/login/force",
            data,
            { withCredentials: true })
            .then(resp => resp.data.isSuccessful)
            .catch(err => { console.log("An error occurred while loggin in", err); return Promise.reject(err); })
    };
}
export function logoutUser() {
    return {
        type: "SET_LOGOUT_STATE",
        payload: Axios.get("https://pacoima-ypi.azurewebsites.net/api/users/logout", { withCredentials: true })
            .then(resp => !resp.data.isSuccessful)
            .catch(err => console.log("An error occurred while logging out", err))
    };
}

export function loginStatus() {
    return {
        type: "SET_LOGIN_STATE",
        payload: Axios.get("https://pacoima-ypi.azurewebsites.net/api/users/login/status", { withCredentials: true })
            .then(resp => resp.data.isSuccessful)
            .catch(err => {
                console.log("an error occurred while checking the login status", err);
                return false; // Set the status to not logged in
            })
    };
}

export function homeMain() {
    return {
        type: "SET_USER_NAME",
        payload: Axios.get("https://pacoima-ypi.azurewebsites.net/api/people/CurrentUser",
            { withCredentials: true })
            .then(resp => resp.data.item)
            .catch(err => {
                console.log("an error occured while showing current user", err)
            })
    };


}
// export function userStatus() {
//     return {
//         type: "SET_STATUS_STATE",
//         payload: Axios.get("https://pacoima-ypi.azurewebsites.net/api/profiles",
//             { withCredentials: true })
//             .then(resp => resp.data.isSuccessful)
//             .catch(err => {
//                 console.log("an error occured while reciving user information", err);
//             })
//     };
// }

// export function faqCategories(data) {
    //     return {
//         type: "SET_FAQ_CATEGORIES",
//         payload: Axios.get("https://pacoima-ypi.azurewebsites.net/api/faqcategories",
//             { withCredentials: true })
//             .then(resp => resp.data.items)
//             .catch(err => console.log("an error occured while getting the faq categories", err))
//     };
// }


// export function myFaqs(data) {
//     return {
//         type: "SET_MYFAQS_STATE",
//         payload: Axios.get("https://pacoima-ypi.azurewebsites.net/api/faqs/user",
//             { withCredentials: true })
//             .then(resp => resp.data.items)
//             .catch(err => { console.log("an error occured while getting myFaqs", err) })
//     };
// }