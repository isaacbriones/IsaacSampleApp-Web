const UserReducer = (
    state = {
        isLoggedIn: false,
        loggedUser: "",
        loginSuccess: true
    }, action) => {
    switch (action.type) {
        case 'SET_LOGIN_STATE_FULFILLED':
            state = {
                ...state,
                loginSuccess: action.payload.isSuccessful,
                loggedUser: action.payload.item,
                isLoggedIn: action.payload.isSuccessful
            };
            break;
        case 'SET_LOGOUT_STATE_FULFILLED':
            state = {
                loggedUser: "",
                isLoggedIn: false,
            };
            break;
        case 'CHECK_LOGIN_STATE_FULFILLED':
            if (action.payload !== undefined) {
                state = {
                    ...state,
                    loggedUser: action.payload,
                    isLoggedIn: true
                };
            }
            else {
                state = {
                    isLoggedIn: false,
                }
            }
            break;
    }
    return state;
};

export default UserReducer;