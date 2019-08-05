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
import {commentService, companyService} from '../../_services';
import {commentConstants} from "../TRASH/CommentsContainer/constants";
import {alertActions} from "../../_actions/alert.actions";

export const getCampaignSuccess = payload => ({
    type: GET_CAMPAIGN_SUCCESS,
    payload,
});

export const getCampaignFail = payload => ({
    type: GET_CAMPAIGN_FAIL,
    payload,
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const resetDeleting = () => ({
    type: RESET_DELETING,
});

export const deleteCampaignSuccess = payload => ({
    type: DELETE_CAMPAIGN_SUCCESS,
    payload,
});

export const deleteCampaignFail = payload => ({
    type: DELETE_CAMPAIGN_FAIL,
    payload,
});

export const getCampaignRequest = id => dispatch => {
    dispatch({ type: GET_CAMPAIGN });

    companyService.getById(id)
        .then(campaign => {
                dispatch(getCampaignSuccess(campaign));
            },
            err => {
                dispatch(getCampaignFail(err));
            }
        );

};

export const deleteCampaignRequest = id => dispatch => {
    dispatch({ type: DELETE_CAMPAIGN });

    companyService.delete(id)
        .then(data => {
                dispatch(deleteCampaignSuccess(data));
                dispatch(resetDeleting());
        },
            err => {
                dispatch(deleteCampaignFail(err));
                dispatch(clearErrors());
            });

};

export const changeRatingState = state => dispatch => {

        dispatch(request());

        companyService.changeRatingState(state)
            .then(
                (responce) => {
                    dispatch(success( responce));


                },
                error => {
                    dispatch(failure(error));

                }
            );


    function request() { return { type: CHANGE_RATING} }
    function success(payload) { return {type: CHANGE_RATING_SUCCESS, payload  } }
    function failure(error) { return { type: CHANGE_RATING_FAIL, error } }
}

export const donateMoney = data => dispatch => {
    dispatch({ type: DONATE });

    companyService.donateMoney(data)
        .then(
            currentMoney => dispatch({type : DONATE_SUCCESS, payload : currentMoney}),

            error =>  dispatch({type : DONATE_FAIL, error})


        )

};

export const getReward = data => dispatch => {
    dispatch({ type: GET_REWARD });

    companyService.getReward(data)
        .then(
            currentMoney => dispatch({type : GET_REWARD_SUCCESS, currentMoney}),
            error =>  dispatch({type : GET_REWARD_FAIL, error})


        )

};
