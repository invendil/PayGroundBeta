import { Button, Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

export const LoginForm = ({
    handleSubmit,
    isSubmitting,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
}) => (
    <Form className="" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicusername">
            <Form.Label>Username</Form.Label>
            <Form.Control
                name="username"
                placeholder="Enter username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.username && touched.username}
            />
            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && !!errors.password}
            />
            <Form.Control.Feedback type="invalid">
                {touched.password && errors.password}
            </Form.Control.Feedback>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Submit'}
        </Button>
    </Form>
);
