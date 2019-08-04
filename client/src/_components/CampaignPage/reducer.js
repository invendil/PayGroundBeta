import {
    CLEAR_ERRORS,
    DELETE_CAMPAIGN,
    DELETE_CAMPAIGN_FAIL, DELETE_CAMPAIGN_SUCCESS,
    GET_CAMPAIGN,
    GET_CAMPAIGN_FAIL,
    GET_CAMPAIGN_SUCCESS,
    RESET_DELETING,
    CHANGE_RATING_FAIL,
    CHANGE_RATING_SUCCESS,
    CHANGE_RATING,
    DONATE,
    DONATE_FAIL,
    DONATE_SUCCESS,
    GET_REWARD,
    GET_REWARD_FAIL,
    GET_REWARD_SUCCESS
} from './constants';


const initialState = {
    isLoading: false,
    error: '',
    campaign: {},
    isDeleted: false,
    isRantingChanged : false
};

export const campaignPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAMPAIGN:
            // return { ...state, isLoading: true, error: '' };
            return { ...initialState, isLoading: true , };
        case GET_CAMPAIGN_FAIL:
            return {
                ...state,
                error: action.payload.response.data.errors,
                isLoading: false,

            };
        case GET_CAMPAIGN_SUCCESS:
            return { ...state, campaign: { ...action.payload }, isLoading: false , isRantingChanged : false};


        case CHANGE_RATING:
            return { ...state, isLoading: true};
        case CHANGE_RATING_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        case CHANGE_RATING_SUCCESS:
            return {
                ...state,
                campaign : {...state.campaign, rating : action.payload},
                isRantingChanged : true
            };



        case DONATE:
            return { ...state };
        case DONATE_FAIL:
            return {
                ...state,
                error: action.error,
            };
        case DONATE_SUCCESS:
            return { ...state, campaign: { ...state.campaign, currentMoney: action.currentMoney }};


        case GET_REWARD:
            return { ...state };
        case GET_REWARD_FAIL:
            return {
                ...state,
                error: action.error,
            };
        case GET_REWARD_SUCCESS:
            return { ...state, campaign : {...state.campaign, currentMoney : action.currentMoney}};


        case DELETE_CAMPAIGN:
            return { ...state, isLoading: true, error: '' };
        case DELETE_CAMPAIGN_FAIL:
            return {
                ...state,
                error: action.payload.response.data.errors,
                isLoading: false,
            };
        case DELETE_CAMPAIGN_SUCCESS:
            return { ...state, campaign: {}, isDeleted: true, isLoading: false };
        case RESET_DELETING:
            return { ...state, isDeleted: false};
        case CLEAR_ERRORS:
            return { ...state, error: ''};
        default:
            return state;
    }
};
