import {homePageConstants} from './constants';

const initialState = {
    isLoading: false,
    error: '',
    categories : [],
    companies: []
};

export const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case homePageConstants.GET_SOME_COMPANIES_REQUEST:
            return { ...initialState, isLoading: true};
        case homePageConstants.GET_SOME_COMPANIES_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        case homePageConstants.GET_SOME_COMPANIES_SUCCESS:
            return {
                ...state,
                companies: action.payload.companies ,
                categories : action.payload.categories,
                isLoading: false,
            };


        default:
            return state;
    }
};
