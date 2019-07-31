import {newsConstants}  from './constants';

export function news(state = {}, action) {

  switch (action.type) {
      case newsConstants.START_EDITING:


              return {
                  ...state,
                  newsList : action.newsList,
                  isNewsEditing: true
              };



      case newsConstants.CANCEL_EDITING:
          return {
              ...state,
              isNewsEditing: false
          };

      case newsConstants.CONFIRM_EDITING:

              return {
                  ...state,
                  isNewsEditing: false,
                  newsList : action.newsList

              };



      case newsConstants.DELETE_NEW_POST:
          return {
              ...state,

              newPost : {}
          };

    default:
      return state
  }
}