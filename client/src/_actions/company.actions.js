import { companyConstants } from '../_constants';
import { companyService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const companyActions = {
    addcompany,
    getById,

};



function addcompany(company) {
    return dispatch => {
        dispatch(request(company));

        companyService.add(company)
            .then(
                () => { 
                    dispatch(success());
                    history.push('/create');
                    dispatch(alertActions.success('Company added successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(company) { return { type: companyConstants.ADD_REQUEST, company } }
    function success(company) { return { type: companyConstants.ADD_SUCCESS, company } }
    function failure(error) { return { type: companyConstants.ADD_FAILURE, error } }
}

function getById() {
    return dispatch => {
        dispatch(request());

        companyService.getById()
            .then(
                company => dispatch(success(company)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: companyConstants.GET_REQUEST } }
    function success(company) { return { type: companyConstants.GET_SUCCESS, company } }
    function failure(error) { return { type: companyConstants.GET_FAILURE, error } }
}

