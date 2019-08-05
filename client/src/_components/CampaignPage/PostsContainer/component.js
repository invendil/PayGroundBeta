import React  from 'react';
import { connect } from 'react-redux';
import {PostComponent} from "./PostComponent/component";
import './style.css'
import {PostCreateComponent} from "./PostCreateComponent/component";
import { Modal, Button } from 'antd';
import { postActions } from './actions'

class PostsContainer extends React.Component {

    constructor(props){

        super(props);
        this.state = {

            editPostId : -1,
            editPost : {
                time : '',
                title : '',
                bodyHtml : ''
            },
            isPostEditing: false
        };
        this.putPostToEdit =  this.putPostToEdit.bind(this);
        this.props.dispatch(postActions.getAll(this.props.companyId));
    }



    showModal = () => {
        this.setState({
            editPostId : -1
        });

       this.props.dispatch( postActions.startAddPost() );
    };


    putPostToEdit(editPost, id){

        this.setState({
            editPostId : id,
            editPost : editPost
        });

        this.props.dispatch( postActions.startAddPost() );
        this.props.dispatch(postActions.getAll(this.props.companyId));
    }

    render() {
        const {editPost,editPostId } = this.state;
        const {posts, companyId, isUserCreator} = this.props;
        console.log("Post edit", editPost);
        return (
            <div className="posts-form">
                {isUserCreator &&
                    <button type="primary" onClick={this.showModal}>
                        Add
                    </button>
                }

                {posts.isPostEditing && editPost && <PostCreateComponent editPost={editPost} editPostId={editPostId} companyId={companyId}/> }

                {posts.postList ? posts.postList.map((item, index)=>{

                    return(
                        <PostComponent
                            id={index}
                            key={index}
                            post ={item}

                            putPostToEdit={this.putPostToEdit}/>
                    );

                }) : null}
            </div>

        );
    }
}

function mapStateToProps(state) {
    const {posts} = state;

    return {
        posts: posts,
        companyId : state.campaignPageReducer.campaign.id,
    }
}


const connected = connect(mapStateToProps)(PostsContainer);
export { connected as PostsContainer };