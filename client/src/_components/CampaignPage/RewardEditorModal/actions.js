import {
    CREATE_REWARD,
    CREATE_REWARD_SUCCESS,
    CREATE_REWARD_FAIL,
    UPDATE_REWARD_REQUEST, UPDATE_REWARD_FAIL, UPDATE_REWARD_SUCCESS,
} from './constants';
import { companyService } from '../../../_services';
import {addReward, updateReward} from '../RewardsSection/actions';
import {rewardService} from "../../../_services/reward.service";

export const createRewardSuccess = payload => ({
    type: CREATE_REWARD_SUCCESS,
    payload,
});

export const updateRewardFail = payload => ({
    type: UPDATE_REWARD_FAIL,
    payload,
});

export const updateRewardSuccess = payload => ({
    type: UPDATE_REWARD_SUCCESS,
    payload,
});

export const createRewardFail = payload => ({
    type: CREATE_REWARD_FAIL,
    payload,
});

export const updateRewardRequest = data => dispatch =>
    new Promise(function(resolve, reject) {
        dispatch({ type: UPDATE_REWARD_REQUEST });

        rewardService.update(data)
            .then(reward => {
                dispatch(updateRewardSuccess(reward.id));
                dispatch(updateReward(reward));
                resolve(reward.id);
            },
                err => {
                dispatch(updateRewardFail(err));
                reject(err);
            })
            .catch();
    });

export const createRewardRequest = data => dispatch =>
    new Promise(function(resolve, reject) {
        dispatch({ type: CREATE_REWARD });

        rewardService.add(data)
            .then(reward => {
                dispatch(createRewardSuccess(reward.id));
                dispatch(addReward(reward));
                resolve(reward.id);
            },
                err => {
                    dispatch(createRewardFail(err));
                    reject(err);
                })

    });
