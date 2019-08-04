import React from "react";
import "antd/dist/antd.css";
import {Form, Button, Text} from "react-bootstrap"

import moment from "moment-es6";

import {Formik} from "formik";
import converter from "html-to-markdown";
import {validationSchema} from './validationSchema'
import CommentFormComponent from "./CommentFormComponent/component";

export default class CommentForm extends React.Component{
    constructor(props) {
        super(props);


    }




    render() {
        const {username, companyId, addComment} = this.props;
        return (
            <div>
                <Formik
                    initialValues={{

                        body : ''

                    }}
                    onSubmit={(values, actions) => {
                        console.log("messege",values);
                        const data = {
                            username,
                            companyId,
                            body : values.body,
                            createTime : new Date()
                        };

                        addComment(data);

                    }}
                    validationSchema={validationSchema}
                    render={
                        formikProps => (

                           <CommentFormComponent
                               {...formikProps}
                           />
                        )

                    }
                />
            </div>
        );
    }


}