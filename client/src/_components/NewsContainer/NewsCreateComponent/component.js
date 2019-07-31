import React  from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import './style.css'

import  PropTypes  from 'prop-types';
import SimpleMDE from "simplemde";
import {Formik} from "formik";
import { NewsCreateForm } from './NewsCreateForm/component'
import { validationSchema } from './validationSchema'
import { newsActions } from '../actions'



class NewsCreateComponent extends React.Component {

    constructor(props){
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel(){
        this.props.dispatch(newsActions.cancelAddNews());
    }

    render() {
        const {news, editNews} = this.props;
        const {isNewsEditing} = news;
        console.log("Editor: ", isNewsEditing);
        return (
            <div className='news-create'>

                <Formik
                    initialValues={{
                        title: editNews.title,
                        time : editNews.time,
                        bodyMD : editNews.bodyHtml

                    }}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {


                        setTimeout(() => {
                           let html = SimpleMDE.prototype.markdown(values.bodyMD);


                            const newPost = {
                                title : values.title,
                                time : 'some time',
                                bodyHtml : html
                            }
                            console.log("New post ", this.props.editNewsId);


                            this.props.dispatch(newsActions.confirmAddNews(
                                    newPost,
                                    this.props.editNewsId,
                                    this.props.news.newsList,
                                    this.props.companyId
                            ));
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    render={formikProps => (
                        <NewsCreateForm {...formikProps} handleCancel = {this.handleCancel} isNewsEditing = {isNewsEditing}/>
                    )}
                />
            </div>

        );
    }
}


function mapStateToProps(state) {
    const {news} = state;

    return {
        news: news
    }
}


NewsCreateComponent.propTypes = {
    editNewsId: PropTypes.number.isRequired,
    editNews: PropTypes.object.isRequired,
    companyId: PropTypes.number.isRequired

};

const connected = connect(mapStateToProps)(NewsCreateComponent);
export { connected as NewsCreateComponent };