const UserReducer = (
    state = {
        isLoggedIn: false,
        firstName: "",
        lastName: ""
    }, action) => {

    switch (action.type) {
        case 'SET_LOGIN_STATE_FULFILLED':
            state = {
                ...state,
                isLoggedIn: action.payload
            };
            break;
        case 'SET_USER_NAME_FULFILLED':
            state = {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            };
            break;
        default:
            break;
    }
    return state;
};

export default UserReducer;