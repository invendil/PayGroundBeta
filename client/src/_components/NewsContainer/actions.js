import {newsConstants} from './constants'
import {postService} from '../../_services'

export const  newsActions = {
    cancelAddNews,
    startAddNews,
    confirmAddNews,
    deleteNewPostFromStore

};

function startAddNews(newsList) {
    return dispatch => {
        dispatch(request(newsList ? newsList : []));


    };
    function request(newsList) { return { type: newsConstants.START_EDITING, newsList : newsList} }

}

function cancelAddNews() {
    return dispatch => {
        dispatch(request());


    };
    function request() { return { type: newsConstants.CANCEL_EDITING} }

}
function confirmAddNews(news, editNewsId, newsList) {
    return dispatch => {
        if (editNewsId === -1){
            postService.add(news);
            newsList = [news, ...newsList];
        } else {
            postService.update(news);
            newsList[editNewsId] = news;
        }
        dispatch(request(newsList));


    };
    function request(newsList) { return { type: newsConstants.CONFIRM_EDITING,  newsList: newsList };
    }

}

function deleteNewPostFromStore() {
    return dispatch => {
        dispatch(request());


    };
    function request() { return { type: newsConstants.DELETE_NEW_POST} }

}

