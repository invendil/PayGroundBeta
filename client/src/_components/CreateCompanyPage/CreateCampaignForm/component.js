import Section from './Section/component';
import {Button, Form, InputGroup} from 'react-bootstrap';
import React from 'react';
import {Select} from "antd";
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import YoutubeVideo from './YoutubeForm/component.cs'
//import ImageUploader from "./ImageUploader/component";
const { Option } = Select;

export const CreateCampaignForm = props => {
    const { handleSubmit, values, errors, handleChange, handleBlur, touched, setFieldValue } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Section
                title="Campaign title"
                description="Write a clear, brief title that helps people quickly understand the gist of your campaign."
                renderForm={
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name="title"
                            placeholder="Mirobot, 6-axis Mini Industrial Robot Arm"
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.title && touched.title}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.title}
                        </Form.Control.Feedback>
                    </Form.Group>
                }
            />
            <Section
                title="Campaign category"
                description="Choose the category that most closely aligns with your campaign."
                renderForm={
                    <Form.Group controlId="formBasicSelect">
                        <Form.Control as="select">
                            <option>Games</option>
                            <option>Food</option>
                        </Form.Control>
                    </Form.Group>
                }
            />
            <Section
                title="Campaign video"
                description="Add a video from YouTube that describes your project."
                renderForm={
                    <YoutubeVideo
                        link={values.link}
                        handleBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        handleChange={handleChange}
                    />
                }
            />
            <Section
                title="Funding goal"
                description="Set an achievable goal that covers what you need to complete your campaign."

                renderForm={
                    <Form.Group controlId="formBasicCompaignGoal">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                name="goalAmount"
                                placeholder="300"
                                value={values.goalAmount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.goalAmount && touched.goalAmount}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.goalAmount}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                }
            />
            <Section
                title="Expiration date"
                description="Set a time limit for your campaign."

                renderForm={
                    <Form.Group controlId="formBasicDatePicker">
                        <Form.Label>Datepicker</Form.Label>
                        <DatePicker
                            name="expirationDate"
                            selected={values.expirationDate}
                            onChange={e => setFieldValue('expirationDate', e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.expirationDate}
                        </Form.Control.Feedback>
                    </Form.Group>
                }
            />
            <Section
                title="Campaign information"
                description="Write comething."

                renderForm={
                    <Form.Group controlId="formBasicMarkdownEditor">

                        <SimpleMDE
                            id="formMarkdownEditor"

                            onChange={e => setFieldValue('descFieldValue', e)}
                            value={values.descFieldValue}
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
                            {errors.descFieldValue}
                        </Form.Control.Feedback>
                    </Form.Group>
                }
            />
            <div id="kek"/>
            <Button variant="primary" type="submit">
                submit
            </Button>
        </form>
    );
};
