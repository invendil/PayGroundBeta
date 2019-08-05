import {companiesListConstants} from './constants';
import { companyService } from '../../_services/index';



export const companiesListActions = {
    getAllByCategory

};



function getAllByCategory(category) {
    return dispatch => {
        dispatch(request());

        companyService.getAllByCategory(category)
            .then(
                companies => dispatch(success(companies)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: companiesListConstants.GET_COMPANIES_BY_CATEGORY_REQUEST} }
    function success(payload) { return { type: companiesListConstants.GET_COMPANIES_BY_CATEGORY_SUCCESS, payload } }
    function failure(error) { return { type: companiesListConstants.GET_COMPANIES_BY_CATEGORY_FAILURE, error } }
}
