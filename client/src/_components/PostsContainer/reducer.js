import {postConstants}  from './constants';

export function posts(state = {}, action) {

  switch (action.type) {
      case postConstants.START_EDITING:


              return {
                  ...state,

                  isPostEditing: true
              };



      case postConstants.CANCEL_EDITING:
          return {
              ...state,
              isPostEditing: false
          };

      case postConstants.ADD_SUCCESS:

          return {
              ...state,
              isPostEditing: false


          };
      case postConstants.ADD_FAILURE:

          return {
              ...state,
              isPostEditing: false


          };

      case postConstants.UPDATE_SUCCESS:

          return {
              ...state,
              isPostEditing: false


          };
      case postConstants.UPDATE_FAILURE:

          return {
              ...state,
              isPostEditing: false


          };
      case postConstants.GET_ALL_POSTS_SUCCESS:

              return {
                  ...state,
                  isPostEditing: false,
                  postList : action.postList

              };



      case postConstants.DELETE_NEW_POST:
          return {
              ...state,

              newPost : {}
          };

    default:
      return state
  }
}