import {companyConstants} from '../_constants';

export function companies(state = {}, action) {
  switch (action.type) {

    case companyConstants.ADD_REQUEST:
        return {
            ...state,
            addingCompany: true
        };
    case companyConstants.ADD_SUCCESS:
        return {
            ...state,
            createdCompany : action.company,
            addingCompany: false
        };
    case companyConstants.ADD_FAILURE:
        return {
            ...state,
            addingCompany: false
        };
    
    case companyConstants.GET_REQUEST:
      return {
          ...state,
        loadingCompany: true
      };
    case companyConstants.GET_SUCCESS:
      return {
          ...state,
          loadingCompany: false,
        company: action.company
      };
    case companyConstants.GET_FAILURE:
      return {
          ...state,
          loadingCompany: false,
        error: action.error
      };


    case companyConstants.CATEGORIES_REQUEST:
        return {
            ...state,
            loadingCategories: true
        };
    case companyConstants.CATEGORIES_SUCCESS:
        return {
            ...state,
            loadingCategories: false,
            categories: action.categories
        };
    case companyConstants.CATEGORIES_FAILURE:
        return {
            ...state,
            loadingCategories: false,
            error: action.error
        };

      case companyConstants.IMAGES_SET:
          return {
              ...state,
              images: action.images

          };

      case companyConstants.COMPANY_CREATED:
          return {
              ...state,
              createdCompany: action.createdCompany

          };

      default:
      return state
  }
}