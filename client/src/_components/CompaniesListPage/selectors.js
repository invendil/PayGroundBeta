import { createSelector } from 'reselect';

export const commentsContainerReducer = state => state.commentsContainerReducer;

export const selectCommentsSortedByDate = createSelector(
    commentsContainerReducer,
    reducer => reducer.comments.sort((a, b) => new Date(b.createTime) - new Date(a.createTime))
);

