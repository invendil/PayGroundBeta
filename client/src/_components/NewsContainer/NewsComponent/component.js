import React  from 'react';
import { connect } from 'react-redux';
import ReadMoreReact from 'read-more-react';
import './style.css'
import {Card, Button} from "react-bootstrap";
import Holder from 'react-holder'
import ReactHtmlParser from 'react-html-parser'
import  PropTypes  from 'prop-types';

class NewsComponent extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(){

        this.props.putNewsToEdit(this.props.news, this.props.id);

    }
    render() {
        const {news} = this.props;
        const {title, time, bodyHtml} = news;

        return (

            <article>
                <header>
                    <div className='flex justify-between mb3 type-13 soft-black_50 text-uppercase'>
                        <span>{time}</span>
                        <button onClick={this.handleSubmit}>Edit</button>
                    </div>

                    <h2 className='mb3'>{title}</h2>

                </header>

                <div>
                    { ReactHtmlParser(bodyHtml) }
                </div>
            </article>

        );
    }
}
NewsComponent.propTypes = {
    id: PropTypes.number.isRequired,
    news: PropTypes.object.isRequired

};
const connected = connect()(NewsComponent);
export { connected as NewsComponent };