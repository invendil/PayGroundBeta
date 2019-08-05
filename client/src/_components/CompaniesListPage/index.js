import { connect } from 'react-redux';

import {companiesListActions} from './actions';
import CompaniesList from "./component";

import { companiesListReducer } from './reducer'

const mapStateToProps = state => ({
    isLoading: state.companiesListReducer.isLoading,
    companies: state.companiesListReducer.companies,

    error: state.companiesListReducer.error,
    user: state.authentication.user,


});

const mapDispatchToProps = () => ({
    getAllByCategory: companiesListActions.getAllByCategory

});

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(CompaniesList);
