import React, { Component } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import  PropTypes  from 'prop-types';

class CommentFormComponent extends Component {
    render() {
        const {

            handleSubmit,

            values,
            handleChange,
            handleBlur,
            errors,
            touched,

        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        as="textarea"
                        rows="3"
                        name="body"
                        placeholder="Comment..."
                        value={values.body}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.body && touched.body}
                    />
                </Form.Group>
                <Button variant="Primary" onClick={handleSubmit}>
                    Send
                </Button>
            </form>
        );
    }
}



export default CommentFormComponent;
