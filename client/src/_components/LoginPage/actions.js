import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './constants';
import { userService } from '../../_services/user.service'

export const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user,
});

export const userLogoutSuccess = () => ({
    type: USER_LOGOUT_SUCCESS,
});

export const userLogin =  ((user) => dispatch =>{
    console.log("password",user);
    userService.login(user)
    .then(user => {
        dispatch(userLoginSuccess(user));
    });
})

export const userLogout = () => dispatch => {
    localStorage.removeItem('user');
    dispatch(userLogoutSuccess());
};
