import { authHeader, config } from '../_helpers';

export const companyService = {
    add,
    update,
    getById,
    getCategories,
    delete : _delete


};

function update(company) {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log("test1", user);
    company ={
        ...company,
        username: user.username
    }
    console.log("test2", company);
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(company)
    };

    return fetch(config.apiUrl + '/companies/' + company.id, requestOptions).then(handleResponse, handleError);
}


function getCategories() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),

    };

    return fetch(config.apiUrl + '/companies/getcategories' , requestOptions).then(handleResponse, handleError);
}
function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/companies/' + id, requestOptions).then(handleResponse, handleError);
}

function add(company) {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log("test1", user);
    company ={
        ...company,
        username: user.username
    }
    console.log("test2", company);
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(company, user)
    };

    return fetch(config.apiUrl + '/companies/addcompany', requestOptions).then(handleResponse, handleError);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/companies/' + id, requestOptions).then(handleResponse, handleError);
}
function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => {console.log("response", json); resolve(json)});
            } else {
                resolve();
            }
        } else {
            // return error message from response body
            response.text().then(text => reject(text));
        }
    });
}

function handleError(error) {
    return Promise.reject(error && error.message);
}