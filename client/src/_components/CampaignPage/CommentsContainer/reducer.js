import {commentConstants} from './constants';

const initialState = {
    isLoading: false,
    error: '',
    comments: [],
    isChanged : false
};

export const commentsContainerReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentConstants.GET_ALL_COMMENTS_REQUEST:
            return { ...initialState, isLoading: true};
        case commentConstants.GET_ALL_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        case commentConstants.GET_ALL_COMMENTS_SUCCESS:
            return { ...state, comments: action.payload , isLoading: false, isChanged : false };


        case commentConstants.CHANGE_COMMENT_STATE_REQUEST:
            // return { ...state, isLoading: true, error: '' };
            return { ...state, isChanged : false};
        case commentConstants.CHANGE_COMMENT_STATE_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        case commentConstants.CHANGE_COMMENT_STATE_SUCCESS:
            console.log("asdasdas", action);
            return {
                ...state,
                comments : state.comments.map(item => {
                    if(Number(item.id) === Number(action.commentId))
                        if (item.state !== 0){
                            return {
                                ...item,
                                state : action.state,
                                likesCount : item.likesCount+action.state,
                                dislikesCount : item.dislikesCount-action.state
                            };
                        } else {
                            if (action.state === 1)
                                return {
                                    ...item,
                                    state : action.state,
                                    likesCount : item.likesCount+action.state,
                                };
                            else
                                return {
                                    ...item,
                                    state : action.state,
                                    dislikesCount : item.dislikesCount-action.state
                                };
                        }
                    return item;
                }),
                changedCommentId: action.payload ,
                isChanged : true
            };

        default:
            return state;
    }
};
