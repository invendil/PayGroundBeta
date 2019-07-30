
import {Button, Form, InputGroup} from 'react-bootstrap';
import React from 'react';
import {Select} from "antd";
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";

import 'easymde/dist/easymde.min.css';


const { Option } = Select;

export const NewsCreateForm = props => {

    const {
        handleSubmit,
        values,
        errors,
        handleChange,
        handleBlur,
        touched,

        setFieldValue,
    } = props;

    return (

        <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={handleSubmit}
            onCancel={this.handleCancel}
        >

                <Form.Group controlId="formNewsTitle">

                    <Form.Control
                        name="title"
                        placeholder="News title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.title && touched.title}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.title}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formNewsMarkdownEditor">

                    <SimpleMDE
                        id="formNewsMarkdownEditor"

                        onChange={e => setFieldValue('bodyMD', e)}
                        value={values.bodyMD}
                        options={{
                            autofocus: false,
                            spellChecker: false,
                            renderingConfig: {
                                codeSyntaxHighlighting: true
                            }
                            // etc.
                        }}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.bodyMD}
                    </Form.Control.Feedback>
                </Form.Group>

        </Modal>
    );
};
