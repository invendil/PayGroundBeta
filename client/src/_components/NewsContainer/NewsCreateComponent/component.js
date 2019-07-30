import React  from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import './style.css'


import SimpleMDE from "simplemde";
import {Formik} from "formik";
import { NewsCreateForm } from './NewCreateForm/component'
import { validationSchema } from './validationSchema'



class NewsCreateComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render() {


        return (
            <div className='news-create'>
                <Formik
                    initialValues={{
                        title: '',

                        bodyMD : '',
                        bodyHtml : ''
                    }}
                    handleSubmit = {this.props.}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {


                        setTimeout(() => {
                        //    let html = SimpleMDE.prototype.markdown(values.descFieldValue);



                            alert(values.bodyMD);
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    render={

                            <NewsCreateForm/>
                        }
                />
            </div>

        );
    }
}
const connected = connect()(NewsCreateComponent);
export { connected as NewsCreateComponent };