import React  from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import './style.css'
import converter from 'html-to-markdown';
import  PropTypes  from 'prop-types';
import SimpleMDE from "simplemde";
import {Formik} from "formik";
import { PostCreateForm } from './PostCreateForm/component'
import { validationSchema } from './validationSchema'
import { postActions } from '../actions'



class PostCreateComponent extends React.Component {

    constructor(props){
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel(){
        this.props.dispatch(postActions.cancelAddPost());
    }

    render() {
        const {posts, editPost} = this.props;
        const {isPostEditing} = posts;
        console.log("Editor: ", isPostEditing);
        return (
            <div className='post-create'>

                <Formik
                    initialValues={{
                        title: editPost.title,
                        time : editPost.time,
                        bodyMD : converter.convert(editPost.bodyHtml)

                    }}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {


                        setTimeout(() => {
                           let html = SimpleMDE.prototype.markdown(values.bodyMD);


                            const newPost = {
                                title : values.title,
                                time : 'some time',
                                bodyHtml : html,
                                companyId : this.props.companyId
                            }
                            console.log("New post ", this.props.editPostId);

                            if (this.props.editPostId === -1){
                                this.props.dispatch(postActions.add(
                                        newPost
                                ));
                            } else {
                                this.props.dispatch(postActions.update(
                                        newPost
                                ));
                            }
                            this.props.dispatch(postActions.conf(this.props.companyId));
                            this.props.dispatch(postActions.getAll(this.props.companyId));
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    render={formikProps => (
                        <PostCreateForm {...formikProps} handleCancel = {this.handleCancel} isPostEditing = {isPostEditing}/>
                    )}
                />
            </div>

        );
    }
}


function mapStateToProps(state) {
    const {posts} = state;

    return {
        posts: posts
    }
}


PostCreateComponent.propTypes = {
    editPostId: PropTypes.number.isRequired,
    editPost: PropTypes.object.isRequired,
    companyId: PropTypes.number.isRequired

};

const connected = connect(mapStateToProps)(PostCreateComponent);
export { connected as PostCreateComponent };