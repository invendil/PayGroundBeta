import { authHeader, config } from '../_helpers';

export const postService = {
    add,
    getAll,

    update,
    delete: _delete
};

function getAll(companyId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        body: JSON.stringify(companyId)
    };

    return fetch(config.apiUrl + '/posts/getallbycompany/'+companyId, requestOptions).then(handleResponse, handleError);
}


function add(post) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    };

    return fetch(config.apiUrl + '/posts/add', requestOptions).then(handleResponse, handleError);
}

function update(post) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    };

    return fetch(config.apiUrl + '/posts/' + post.id, requestOptions).then(handleResponse, handleError);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/posts/' + id, requestOptions).then(handleResponse, handleError);
}

function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
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