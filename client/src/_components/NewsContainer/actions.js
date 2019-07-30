import constants from './constants'

export default  actions = {
    cancelAddNews,
    startAddNews,
    confirmAddNews,
    deleteNewPostFromStore

};

function cancelAddNews() {
    return dispatch => {
        dispatch(request());


    };
    function request() { return { type: constants.START_EDITING} }

}

function startAddNews() {
    return dispatch => {
        dispatch(request());


    };
    function request() { return { type: constants.CANCEL_EDITING} }

}
function confirmAddNews(news) {
    return dispatch => {
        dispatch(request(news));


    };
    function request(news) { return { type: constants.START_EDITING, newPost : news} }

}

function deleteNewPostFromStore() {
    return dispatch => {
        dispatch(request());


    };
    function request() { return { type: constants.DELETE_NEW_POST} }

}

