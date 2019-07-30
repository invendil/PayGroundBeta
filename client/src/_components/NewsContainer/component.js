import React  from 'react';
import { connect } from 'react-redux';
import {NewsComponent} from "./NewsComponent/component";
import './style.css'
import {NewsCreateComponent} from "./NewsCreateComponent/component";
import { Modal, Button } from 'antd';
import newsActions from './actions'
class NewsContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            news : [
                {
                    time : '05/07/2019',
                    title : 'Title',
                    textBody : '<h3>Text body</h3>'
                },
                {
                    time : '05/07/2019',
                    title : 'Title',
                    textBody : '<h3>Text body</h3>'
                },
                {
                    time : '05/07/2019',
                    title : 'Title',
                    textBody : '<h3>Text body</h3>'
                },
                {
                    time : '05/07/2019',
                    title : 'Title',
                    textBody : '<h3>Text body</h3>'
                }
            ],
            visible: this.props.isNewsEditing
        }
    }



    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleModelOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };




    render() {


        return (
            <div className="news-form">

                <button type="primary" onClick={this.showModal}>
                    Add
                </button>

                <NewsCreateComponent/>

                {this.state.news.map((item, index)=>{

                    return(
                        <NewsComponent id={{index}+'News'} key={index} title={item.title} textBody={item.textBody} time={item.time}/>
                    );

                })}
            </div>

        );
    }
}

function mapStateToProps(state) {
    const {news} = state;

    return {
        news: news
    }
}


const connected = connect()(NewsContainer);
export { connected as NewsContainer };