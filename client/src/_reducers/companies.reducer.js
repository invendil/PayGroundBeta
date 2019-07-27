import {companyConstants} from '../_constants';

export function companies(state = {}, action) {
  switch (action.type) {

    case companyConstants.ADD_REQUEST:
        return { addingCompany: true };
    case companyConstants.ADD_SUCCESS:
        return {};
    case companyConstants.ADD_FAILURE:
        return {};
    
    case companyConstants.GET_REQUEST:
      return {
        loadingCompany: true
      };
    case companyConstants.GET_SUCCESS:
      return {
        company: action.company
      };
    case companyConstants.GET_FAILURE:
      return { 
        error: action.error
      };
    
    default:
      return state
  }
}