import React from "react";
import "antd/dist/antd.css";
import PropTypes from 'prop-types';
import CommentComponent from "./CommentComponent/component";
import CommentForm from "./CommentForm/component";


 class CommentsContainer extends React.Component {
     componentDidMount() {
         const { getComments, id, user } = this.props;

         const data = {
             companyId :id,
             userId : user ? user.id : 0
         };
         console.log("Comments data", data);
         getComments(data);
     }



    render() {

        const {
            comments,
            isLoading,
            id,
            user,
            isAuthorized,
            isUserCreator,
            addComment,
            changeCommentState
        } = this.props;
        const data = {
            companyId :id,
            userId : user ? user.id : 0
        };
        console.log("comments", Object.values(comments));
        return (


                    <div>
                        {isLoading ? <div> Loading...</div> : null}
                        {isAuthorized ?
                            <div>
                                <CommentForm
                                    companyId ={id}
                                    username = {user.username}
                                    addComment = {addComment}
                                />
                            </div>:
                            null
                        }

                        {comments && comments.map((item, index) => {
                            return (
                                <CommentComponent
                                    key={index}
                                    commentId={item.id}
                                    author={item.username}
                                    createdAt={item.createTime}
                                    content={item.body}
                                    likes={item.likesCount}
                                    dislikes={item.dislikesCount}
                                    likeState={item.state}
                                    isAuthorized = {isAuthorized}
                                    changeCommentState = {changeCommentState}
                                    userId = {user.id}
                                    data ={data}
                                />
                            );
                        })}

                    </div>

        );
    }
}
CommentsContainer.propTypes = {
    getComments: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,

    isLoading: PropTypes.bool.isRequired,
    comments: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    isUserCreator: PropTypes.bool.isRequired,
};

export default CommentsContainer;