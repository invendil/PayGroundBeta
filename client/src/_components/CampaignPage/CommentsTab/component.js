import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { Button, Container, Form } from 'react-bootstrap';
import CommentComponent from './CommentComponent/component';
import {commentService} from '../../../_services/comment.service';
import CommentForm from './CommentForm/component';
import { Link } from 'react-router-dom';
import {config } from '../../../_helpers'
import { HubConnection } from 'signalr-client-react';


class CommentsTab extends Component {
    constructor(props) {
        super(props);


        this.state = {
            comments: [],
            text: '',
            connection : new HubConnection(config.apiUrl + '/commentshub')
        };

    }

    componentDidMount() {



        this.state.connection.on('commentAdded/'+this.props.id, response => {
            let data ={
                companyId : this.props.id,
                userId : this.props.user.id ? this.props.user.id : 0
            };
            console.log("hub is worked!", data);
            commentService.getAllByCompanyId(data)
                .then(comments => {
                    this.setState({ comments: comments });
                }, error => {
                    console.log(error);
                })
        });

        this.state.connection.start();
        let data ={
            companyId : this.props.id,
            userId : this.props.user.id ? this.props.user.id : 0
        };

        commentService.getAllByCompanyId(data)
            .then(comments => {

                this.setState({ comments: comments });
            }, error => {
                console.log(error);
            })


    }



    handleChange = e => {
        console.log("event handlechange", e);
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    handleAdd = e => {
        e.preventDefault();
        const { text } = this.state;
        console.log("comment text", this.state);
        const data = {
            body: text.trim(),
        //    userId: this.props.user.id,
            companyId: Number(this.props.id),
        };
        this.setState({ text: '' });
        commentService.add(data);
        let dataComment ={
            companyId : this.props.id,
            userId : this.props.user.id ? this.props.user.id : 0
        };
        commentService.getAllByCompanyId(dataComment)
            .then(comments => {

                this.setState({ comments: comments });
            }, error => {
                console.log(error);
            })
    };

    render() {
        const { comments, text } = this.state;
        const { user, isAuthorized } = this.props;
        console.log("isAuthorized", isAuthorized);
        return (

                <Container className="Container">
                    {isAuthorized ? (
                        <CommentForm
                            handleChange={this.handleChange}
                            handleAdd={this.handleAdd}
                            text={text}
                        />
                    ) : (
                        <p className="text-center h6 py-2">
                            You need <Link to="/login">log in</Link> to leave comments
                        </p>
                    )}
                    {comments.length ? (
                        comments.map((item,index) =>
                            <CommentComponent
                                key={index}
                                currentUser={user}
                                commentId={item.id}

                                author={item.username}
                                createdAt={item.createTime}
                                content={item.body}
                                likes={item.likesCount}
                                dislikes={item.dislikesCount}
                                likeState={item.state}
                                isAuthorized = {isAuthorized}
                            />)
                    ) : (
                        <p className="text-center h6 mt-2">No comments yet</p>
                    )}
                </Container>

        );
    }
}

CommentsTab.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
};

export default CommentsTab;
