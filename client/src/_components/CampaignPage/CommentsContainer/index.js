import { connect } from 'react-redux';
import CommentsContainer from './component';
import {commentsContainerActions} from './actions';
import {selectCommentsSortedByDate} from './selectors'
export { commentsContainerReducer } from './reducer';

const mapStateToProps = state => ({
    isLoading: state.commentsContainerReducer.isLoading,
    comments: selectCommentsSortedByDate(state),
    error: state.commentsContainerReducer.error,
    user: state.authentication.user,
    isAuthorized : state.authentication.isAuthorized,
    isChanged : state.commentsContainerReducer.isChanged

});

const mapDispatchToProps = () => ({
    getComments: commentsContainerActions.getAllCommentsByCompanyId,
    changeCommentState : commentsContainerActions.changeCommentState,
    addComment : commentsContainerActions.addComment

});

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(CommentsContainer);
