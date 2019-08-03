import { authHeader, config } from '../_helpers';

export const commentService = {
    add,
    update,
    getAllByCompanyId,
    changeCommentState,
    delete : _delete


};

function update(comment) {
    let user = JSON.parse(localStorage.getItem('user'));

    comment ={
        ...comment,
        username: user.username
    }
    console.log("comment update", comment);
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    };

    return fetch(config.apiUrl + '/comments/' + comment.id, requestOptions).then(handleResponse, handleError);
}


function changeCommentState(state) {
    let user = JSON.parse(localStorage.getItem('user'));


    console.log("comment change state", state);
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    };

    return fetch(config.apiUrl + '/comments/changestate', requestOptions).then(handleResponse, handleError);
}

function getAllByCompanyId(data) {
    console.log("Comments data from fetch", data);
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body : JSON.stringify(data)

    };

    return fetch(config.apiUrl + '/comments/getall' , requestOptions).then(handleResponse, handleError);
}


function add(comment) {
    let user = JSON.parse(localStorage.getItem('user'));

    comment ={
        ...comment,
        username: user.username
    }
    console.log("comment add", comment);
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    };

    return fetch(config.apiUrl + '/comments/addcomment', requestOptions).then(handleResponse, handleError);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/comment/' + id, requestOptions).then(handleResponse, handleError);
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