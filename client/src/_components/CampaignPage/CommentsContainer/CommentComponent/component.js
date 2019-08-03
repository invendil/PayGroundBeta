import React from "react";
import "antd/dist/antd.css";

import { Comment, Icon, Tooltip, Avatar, Divider, notification } from "antd";
import moment from "moment-es6";

export default class CommentComponent extends React.Component{
    constructor(props) {
        super(props);
        this.dislike = this.dislike.bind(this);
        this.like = this.like.bind(this);


    }



    like = () => {
        const {likeState} = this.props;
        console.log("like state", likeState);
        if(likeState != 1){
            const likeData = {
                state: 1,
                commentId: this.props.commentId,
                userId: this.props.userId
            };

            this.props.changeCommentState(likeData);
        };
    };

    dislike = () => {
        const {likeState} = this.props;
        console.log("dislike state", likeState);
        if(likeState != -1){
            const likeData = {
                state: -1,
                commentId: this.props.commentId,
                userId: this.props.userId
            };

            this.props.changeCommentState(likeData);
        };
    };

    render() {
        const { likes, dislikes, isAuthorized, likeState} = this.props;

        const actions = [
            <span>
            <Tooltip title="Like">
              <Icon
                  type="like"
                  theme={likeState === 1 ? 'filled' : 'outlined'}
                  onClick={isAuthorized ? this.like : null}
              />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
          </span>,
            <span>
            <Tooltip title="Dislike">
              <Icon
                  type="dislike"
                  theme={likeState === -1 ? 'filled' : 'outlined'}
                  onClick={isAuthorized ? this.dislike : null}
              />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
          </span>,
        ];

        return (
            <Comment
                actions={actions}
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