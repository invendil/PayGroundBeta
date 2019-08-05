import {homePageConstants} from './constants';
import { companyService } from '../../_services/index';



export const homePageActions = {
    getSomeCompanies

};



function getSomeCompanies() {
    return dispatch => {
        dispatch(request());

        companyService.getSomeCompanies()
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: homePageConstants.GET_SOME_COMPANIES_REQUEST } }
    function success(payload) { return { type: homePageConstants.GET_SOME_COMPANIES_SUCCESS, payload } }
    function failure(error) { return { type: homePageConstants.GET_SOME_COMPANIES_FAILURE, error } }
}
