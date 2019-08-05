import { connect } from 'react-redux';

import {homePageActions} from './actions';
import HomePage from "./component";

import { homePageReducer } from './reducer'

const mapStateToProps = state => ({
    isLoading: state.homePageReducer.isLoading,
    companies: state.homePageReducer.companies,
    categories: state.homePageReducer.categories,
    error: state.homePageReducer.error,
    user: state.authentication.user,


});

const mapDispatchToProps = () => ({
    getSomeCompanies: homePageActions.getSomeCompanies

});

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(HomePage);
