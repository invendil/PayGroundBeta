import { connect } from 'react-redux';
import CampaignPage from './component';
import {deleteCampaignRequest, getCampaignRequest, changeRatingState, getReward, donateMoney} from './actions';

export { campaignPageReducer } from './reducer';

const mapStateToProps = state => ({
    isLoading: state.campaignPageReducer.isLoading,
    campaign: state.campaignPageReducer.campaign,
    error: state.campaignPageReducer.error,
    user: state.authentication.user,
    isAuthorized : state.authentication.isAuthorized,
    isDeleted: state.campaignPageReducer.isDeleted,
});

const mapDispatchToProps = () => ({
    getCampaign: getCampaignRequest,
    deleteCampaign: deleteCampaignRequest,
    changeRatingState : changeRatingState,
    getReward :getReward,
    donateMoney :donateMoney
});

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(CampaignPage);
