import { authHeader, config } from '../_helpers';

export const rewardService = {
    add,
    update,
    getById,
    getAllByCompanyId,
    delete : _delete


};

function update(data) {
    let user = JSON.parse(localStorage.getItem('user'));

    data ={
        "name": data.name,
        "description": data.description,
        "id": data.rewardId,
        "amount": data.amount,
        "companyid": data.id,
        "username": user.username
    }
    console.log("reward", data);
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(config.apiUrl + '/rewards/' + data.companyId, requestOptions).then(handleResponse, handleError);
}



function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/rewards/' + id, requestOptions).then(handleResponse, handleError);
}

function add(data) {
    let user = JSON.parse(localStorage.getItem('user'));

    data ={
        "name": data.name,
        "description": data.description,

        "amount": data.amount,
        "companyid": data.id,
        "username": user.username
    }
    const reward = data;
    console.log("reward", data);
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(data)
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


function _delete(data) {


    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
        body: JSON.stringify(data.rewardId)

    };

    return fetch(config.apiUrl + '/rewards/' + data.rewardId, requestOptions).then(handleResponse, handleError);
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