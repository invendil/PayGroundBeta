import { GET_USER_IFNO_SUCCESS, GET_USER_IFNO_FAIL, GET_USER_IFNO } from './constants';
import {userService} from '../../_services'

export const getUserInfoSuccess = payload => ({
    type: GET_USER_IFNO_SUCCESS,
    payload,
});

export const getUserInfoFail = payload => ({
    type: GET_USER_IFNO_FAIL,
    payload,
});

export const getUserInfoRequest = id => dispatch => {
    dispatch({ type: GET_USER_IFNO });

    userService.getById(id)
        .then(
            userInfo => {
            console.log("user info from responce", userInfo);
            dispatch(getUserInfoSuccess(userInfo));
        },
            error => {
                dispatch(getUserInfoFail(error));
            })

};
