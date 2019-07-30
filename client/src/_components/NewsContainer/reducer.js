import { constants } from './constants';

export function news(state = {}, action) {
  switch (action.type) {
      case constants.START_EDITING:
      return {
          ...state,
          isNewsEditing: true
      };

      case constants.CANCEL_EDITING:
          return {
              ...state,
              isNewsEditing: false
          };

      case constants.CANCEL_EDITING:
          return {
              ...state,
              isNewsEditing: false,
              newPost : action.newPost
          };

      case constants.DELETE_NEW_POST:
          return {
              ...state,

              newPost : {}
          };

    default:
      return state
  }
}