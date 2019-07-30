import React  from 'react';
import { connect } from 'react-redux';

import './style.css'
import {Card, Button, Toast} from "react-bootstrap";



class CommentComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render() {


        return (

            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
            </Toast>


        );
    }
}
const connected = connect()(CommentComponent);
export { connected as CommentComponent };