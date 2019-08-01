import {postConstants} from './constants'
import {postService, userService} from '../../_services'
import {alertActions} from "../../_actions";
import {userConstants} from "../../_constants";

export const  postActions = {
    cancelAddPost,
    startAddPost,

    getAll,
    update,
    add

};


function getAll(companyId) {
    return dispatch => {
        dispatch(request(companyId));

        postService.getAll(companyId)
            .then(
                posts => dispatch(success(posts)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: postConstants.GET_ALL_POSTS_REQUEST } }
    function success(postList) { console.log("Posts",postList); return { type: postConstants.GET_ALL_POSTS_SUCCESS, postList } }
    function failure(error) { return { type: postConstants.GET_ALL_POSTS_FAILURE, error } }
}



// prefixed function name with underscore because delete is a reserved word in javascript





function startAddPost() {
    return dispatch => {
        dispatch(request());


    };
    function request() { return { type: postConstants.START_EDITING} }

}

function cancelAddPost() {
    return dispatch => {
        dispatch(request());


    };
    function request() { return { type: postConstants.CANCEL_EDITING} }

}
function add(post) {
    return dispatch => {
        dispatch(request(post));

        postService.add(post)
            .then(
                () => {
                    dispatch(success());
                    //    history.push('/login');
                    dispatch(alertActions.success('Post added successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: postConstants.ADD_REQUEST } }
    function success() { return { type: postConstants.ADD_SUCCESS } }
    function failure(error) { return { type: postConstants.ADD_FAILURE, error } }

}

function update(post ) {

    return dispatch => {
        dispatch(request(post));

        postService.update(post)
            .then(
                () => {
                    dispatch(success());
                    //    history.push('/login');
                    dispatch(alertActions.success('Post updated successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: postConstants.UPDATE_REQUEST } }
    function success() { return { type: postConstants.UPDATE_SUCCESS } }
    function failure(error) { return { type: postConstants.UPDATE_FAILURE, error } }
}


function deleteNewPostFromStore() {
    return dispatch => {
        dispatch(request());


    };
    function request() { return { type: postConstants.DELETE_NEW_POST} }

}

