import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { isAuthorized: true, user } : {isAuthorized: false, user : {}};

export const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { ...state, ...action.user, isAuthorized: true,  };
        case USER_LOGOUT_SUCCESS:
            return { ...state, isAuthorized: false, token: '', id: '' };
        default:
            return state;
    }
};
