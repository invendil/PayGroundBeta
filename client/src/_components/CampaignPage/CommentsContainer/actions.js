import {commentConstants} from './constants';
import {commentService, userService} from '../../../_services/index';
import {GET_CAMPAIGN_FAIL} from "../constants";
import {alertActions} from '../../../_actions/alert.actions'
import {userConstants} from "../../../_constants/index";



export const commentsContainerActions = {
    addComment,

    getAllCommentsByCompanyId,
    changeCommentState,
    deleteComment

};



function addComment(comment) {
    return dispatch => {
        dispatch(request());

        commentService.add(comment)
            .then(
                () => {
                    dispatch(success());
                    //    history.push('/companies/create');
                    dispatch(alertActions.success('comment added successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: commentConstants.ADD_COMMENT_REQUEST } }
    function success() { return {type: commentConstants.ADD_COMMENT_SUCCESS  } }
    function failure(error) { return { type: commentConstants.ADD_FAILURE, error } }
}



function getAllCommentsByCompanyId(data) {
    return dispatch => {
        dispatch(request());

        commentService.getAllByCompanyId(data)
            .then(
                comments => dispatch(success(comments)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: commentConstants.GET_ALL_COMMENTS_REQUEST } }
    function success(payload) { return { type: commentConstants.GET_ALL_COMMENTS_SUCCESS, payload } }
    function failure(error) { return { type: commentConstants.GET_ALL_COMMENTS_FAILURE, error } }
}


function changeCommentState(state) {
    return dispatch => {
        dispatch(request());

        commentService.changeCommentState(state)
            .then(
                (id) => {
                    dispatch(success( state.state, state.commentId));

                    dispatch(alertActions.success('comment added successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: commentConstants.CHANGE_COMMENT_STATE_REQUEST } }
    function success(state, commentId) { return {type: commentConstants.CHANGE_COMMENT_STATE_SUCCESS, state, commentId  } }
    function failure(error) { return { type: commentConstants.CHANGE_COMMENT_STATE_FAILURE, error } }
}

function deleteComment(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                () => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}