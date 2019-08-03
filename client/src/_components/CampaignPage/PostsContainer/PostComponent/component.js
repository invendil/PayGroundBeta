import React  from 'react';
import { connect } from 'react-redux';
import ReadMoreReact from 'read-more-react';
import './style.css'
import {Card, Button} from "react-bootstrap";
import Holder from 'react-holder'
import ReactHtmlParser from 'react-html-parser'
import  PropTypes  from 'prop-types';

class PostComponent extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(){

        this.props.putPostToEdit(this.props.post, this.props.id);

    }
    render() {
        const {post} = this.props;
        const {title, time, bodyHtml} = post;

        return (
            <div className="span8">

                    <button className="pull-right" onClick={this.handleSubmit}>Edit</button>
                    <h1>{title}</h1>
                    <p>
                        { ReactHtmlParser(bodyHtml) }
                    </p>
                    <div>
                        <span className="badge badge-success">{time}</span>

                    </div>

            </div>


        );
    }
}
PostComponent.propTypes = {
    id: PropTypes.number.isRequired,
    post: PropTypes.object.isRequired

};
const connected = connect()(PostComponent);
export { connected as PostComponent };