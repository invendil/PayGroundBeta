import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-es6';
import "antd/dist/antd.css";

import { Comment, Icon, Tooltip, Avatar, Divider, notification } from "antd";

import {commentService} from "../../../../_services";




var style = {};


class CommentComponent extends Component {


    constructor(props) {
        super(props);
        this.dislike = this.dislike.bind(this);
        this.like = this.like.bind(this);
        this.checkLiked = this.checkLiked.bind(this);
        this.checkLiked();
    }

    checkLiked = () =>{
        var act = null;
        if(this.props.likeState === 1) act = 'liked'
        else if(this.props.likeState === -1) act = 'disliked';
        this.state = {
            likes: this.props.likes,
            dislikes: this.props.dislikes,
            action: act
        };
    }


    like = () => {
        if(this.props.currentUser){
            var likeData = {
                state: 1,
                commentid: this.props.commentId,
                userid: this.props.currentUser.id
            }
            commentService.changeCommentState(likeData)
                .then(response =>{
                        if(this.state.action === null)
                        {this.setState({
                            likes: this.state.likes+1,
                            dislikes: this.state.dislikes,
                            action: 'liked'
                        });
                        }
                        else if (this.state.action === 'disliked'){
                            this.setState({
                                likes: this.state.likes+1,
                                dislikes: this.state.dislikes-1,
                                action: 'liked'
                            });
                        }

                    },
                    error => {

                        notification.error({
                            message: 'Popstarter',
                            description: error.message || 'Sorry! Something went wrong. Please try again!'
                        });

                    }
                );
        }
    };

    dislike = () => {
        if(this.props.currentUser){
            var likeData = {
                state: -1,
                commentid: this.props.commentId,
                userid: this.props.currentUser.id
            }
            commentService.changeCommentState(likeData)
                .then(response =>{
                        if(this.state.action === null)
                        {this.setState({
                            likes: this.state.likes,
                            dislikes: this.state.dislikes+1,
                            action: 'disliked'
                        });
                        }
                        else if (this.state.action === 'liked'){
                            this.setState({
                                likes: this.state.likes-1,
                                dislikes: this.state.dislikes+1,
                                action: 'disliked'
                            });
                        }
                    },
                    error => {

                        notification.error({
                            message: 'Popstarter',
                            description: error.message || 'Sorry! Something went wrong. Please try again!'
                        });

                    }
                );
        }
    };

    /* checkAvatar = () =>{
         if(!this.props.authorUser.picture) return(<Avatar style={{ backgroundColor: getAvatarColor(this.props.authorUser.first_name)}}>
             {this.props.authorUser.first_name[0].toUpperCase()}
         </Avatar>);
         else return(<Avatar src={this.props.authorUser.picture} />);
     }
 */

    render() {
        const { likes, dislikes, action } = this.state;
        const {isAuthorized} = this.props;
        const actions = [
            <span>
              <Tooltip title="Like" style={style}>
                <Icon
                    type="like"
                    theme={action === 'liked' ? 'filled' : 'outlined'}
                    onClick={isAuthorized ? this.like : null}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
            </span>,
            <span>
              <Tooltip title="Dislike" style={style}>
                <Icon
                    type="dislike"
                    theme={action === 'disliked' ? 'filled' : 'outlined'}
                    onClick={isAuthorized ? this.dislike : null}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
            </span>,
        ];
        const { comment } = this.props;

        return (
            <Comment
                actions={actions}
                className="Comment border-top mt-2"
                author={<a>{ this.props.author }</a>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p>
                        {this.props.content}
                    </p>
                }
                datetime={
                    <Tooltip title={moment(this.props.createdAt).format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment(this.props.createdAt).fromNow()}</span>
                    </Tooltip>
                }
            />
        );
    }
}

CommentComponent.propTypes = {
    comment: PropTypes.object.isRequired,
};

export default CommentComponent;