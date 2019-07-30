import { companyConstants } from '../_constants';
import { companyService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';


export const companyActions = {
    addCompany,
    getById,
    getCategories

};



function addCompany(company) {
    return dispatch => {
        dispatch(request(company));

        companyService.add(company)
            .then(
                id => {
                    dispatch(success(id.id));
                //    history.push('/companies/create');
                    dispatch(alertActions.success('Company added successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(company) { return { type: companyConstants.ADD_REQUEST, company } }
    function success(createdCompanyId) { return {type: companyConstants.ADD_SUCCESS, createdCompanyId } }
    function failure(error) { return { type: companyConstants.ADD_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request());

        companyService.getById(id)
            .then(
                company => dispatch(success(company)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: companyConstants.GET_REQUEST } }
    function success(company) { return { type: companyConstants.GET_SUCCESS, company } }
    function failure(error) { return { type: companyConstants.GET_FAILURE, error } }
}


function getCategories() {
    return dispatch => {
        dispatch(request());

        companyService.getCategories()
            .then(
                categories => dispatch(success(categories)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: companyConstants.CATEGORIES_REQUEST } }
    function success(categories) { return { type: companyConstants.CATEGORIES_SUCCESS, categories } }
    function failure(error) { return { type: companyConstants.CATEGORIES_FAILURE, error } }
}


