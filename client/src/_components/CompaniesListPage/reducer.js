import {companiesListConstants} from './constants';

const initialState = {
    isLoading: false,
    error: '',
    categories : [],
    companies: []
};

export const companiesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case companiesListConstants.GET_COMPANIES_BY_CATEGORY_REQUEST:
            return { ...initialState, isLoading: true};
        case companiesListConstants.GET_COMPANIES_BY_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        case companiesListConstants.GET_COMPANIES_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                companies: action.payload,

                isLoading: false,
            };


        default:
            return state;
    }
};
