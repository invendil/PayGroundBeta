import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { companies } from './companies.reducer'
import { posts } from '../_components/CampaignPage/PostsContainer/reducer'
import { createCampaignPageReducer } from '../_components/CampaignEditorPage'
import { campaignPageReducer } from '../_components/CampaignPage'
import {rewardsReducer} from "../_components/CampaignPage/RewardsSection";
import {createRewardReducer} from '../_components/CampaignPage/RewardEditorModal'
import {userPageReducer} from '../_components/ProfilePage/reducer'
import {commentsContainerReducer} from '../_components/CampaignPage/CommentsContainer/reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  createCampaignPageReducer,
  campaignPageReducer,
  posts,
  createRewardReducer,
  rewardsReducer,
  userPageReducer,
    commentsContainerReducer
});

export default rootReducer;