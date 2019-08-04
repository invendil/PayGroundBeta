import React from 'react';
import { Alert } from 'antd';
import { Formik } from 'formik';
import { SignupForm } from './SignupForm/component';
import { validationSchema } from './validationSchema';
import { userService } from '../../../_services/user.service'

class SignupFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverErrors: {},
            serverSuccessMessage: '',
        };
        this.onCloseSuccessAlert = this.onCloseAlert.bind(this, { serverSuccessMessage: '' });
        this.onCloseErrorAlert = this.onCloseAlert.bind(this, { serverErrors: {} });

    }

    onCloseAlert = alertState => {
        this.setState(alertState);
    };

    onSubmit = (values, actions) => {
        userService.register(values)
            .then(
                () => {
                    this.setState({
                        serverSuccessMessage: "Registration successful",
                        serverErrors: {},
                    });
                actions.setSubmitting(false);

            },
                error => {
                    this.setState({
                        serverErrors: {
                            message: error.message,
                            validation: error.response.data.errors,
                        },
                        serverSuccessMessage: '',
                    });
                    actions.setSubmitting(false);
                });

    };

    render() {
        const { serverErrors, serverSuccessMessage } = this.state;

        return (
            <div className="w-50">
                {serverErrors.message && (
                    <Alert
                        className="mb-3"
                        message="Submitting error"
                        onClose={this.onCloseErrorAlert}
                        type="error"
                        description={serverErrors.validation || 'Please try again later'}
                        closable
                    />
                )}
                {serverSuccessMessage && (
                    <Alert
                        className="mb-3"

                        onClose={this.onCloseSuccessAlert}
                        type="success"
                        description={serverSuccessMessage}
                        closable
                    />
                )}
                <Formik
                    validationSchema={validationSchema}
                    validateOnChange
                    onSubmit={this.onSubmit}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        username: '',
                        email: '',
                        password: '',
                        repeatPassword: '',
                    }}
                    render={SignupForm}
                />
            </div>
        );
    }
}

export default SignupFormContainer;
