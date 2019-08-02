import { authHeader, config } from '../_helpers';

export const rewardService = {
    add,
    update,
    getById,
    getAllByCompanyId,
    delete : _delete


};

function update(reward) {
    let user = JSON.parse(localStorage.getItem('user'));

    reward ={
        ...reward,
        username: user.username
    }
    console.log("reward", reward);
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(reward)
    };

    return fetch(config.apiUrl + '/rewards/' + reward.id, requestOptions).then(handleResponse, handleError);
}



function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/rewards/' + id, requestOptions).then(handleResponse, handleError);
}

function add(reward) {
    let user = JSON.parse(localStorage.getItem('user'));

    reward ={
        ...reward,
        username: user.username
    }
    console.log("reward", reward);
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(reward)
    };

    return fetch(config.apiUrl + '/rewards/addreward', requestOptions).then(handleResponse, handleError);
}

function getAllByCompanyId(companyId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/rewards/all/'+companyId, requestOptions).then(handleResponse, handleError);
}


function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };

    return fetch(config.apiUrl + '/rewards/' + id, requestOptions).then(handleResponse, handleError);
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

function handleError(err) {
    return Promise.reject(err && err.message);
}