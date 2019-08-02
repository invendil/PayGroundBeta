import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { isAuthorized: true, user } : {isAuthorized: false, user : {}};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLoggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        isAuthorized: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}