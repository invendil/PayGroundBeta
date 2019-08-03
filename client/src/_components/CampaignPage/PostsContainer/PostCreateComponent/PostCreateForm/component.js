
import {Button, Form, InputGroup} from 'react-bootstrap';
import React from 'react';
import {Select, Modal} from "antd";
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";
import { postActions } from '../../actions'

import 'easymde/dist/easymde.min.css';


const { Option } = Select;

export const PostCreateForm = props => {

    const {
        handleSubmit,
        handleCancel,
        values,
        errors,
        isPostEditing,
        handleChange,
        handleBlur,
        touched,
        setFieldValue,
    } = props;
    console.log("Into editor: ", isPostEditing);
    return (

        <Modal
            title="Basic Modal"
            visible={isPostEditing}
            onOk={handleSubmit}
            onCancel={handleCancel}
        >

                <Form.Group controlId="formPostTitle">

                    <Form.Control
                        name="title"
                        placeholder="Post title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.title && touched.title}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.title}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPostMarkdownEditor">

                    <SimpleMDE
                        id="formPostMarkdownEditor"

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
