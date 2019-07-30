import React  from 'react';
import { connect } from 'react-redux';
import ReadMoreReact from 'read-more-react';
import './style.css'
import {Card, Button} from "react-bootstrap";
import Holder from 'react-holder'
import ReactHtmlParser from 'react-html-parser'

class NewsComponent extends React.Component {

    constructor(props){
        super(props);

    }

    render() {


        return (

            <article>
                <header>
                    <div className='flex justify-between mb3 type-13 soft-black_50 text-uppercase'>
                        <span>{this.props.time}</span>
                    </div>

                    <h2 className='mb3'>{this.props.title}</h2>

                </header>

                <div>
                    { ReactHtmlParser(this.props.textBody) }
                </div>
            </article>

        );
    }
}
const connected = connect()(NewsComponent);
export { connected as NewsComponent };