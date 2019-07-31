import React  from 'react';
import { connect } from 'react-redux';
import {NewsComponent} from "./NewsComponent/component";
import './style.css'
import {NewsCreateComponent} from "./NewsCreateComponent/component";
import { Modal, Button } from 'antd';
import { newsActions } from './actions'
class NewsContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {

            editNewsId : -1,
            editNews : {
                time : '',
                title : '',
                bodyHtml : ''
            },
            isNewsEditing: false
        };
        this.putNewsToEdit =  this.putNewsToEdit.bind(this);

    }



    showModal = () => {
        this.setState({
            editNewsId : -1,
        });

       this.props.dispatch( newsActions.startAddNews(this.props.news.newsList) );
    };

    // handleModelOk = e => {
    //     console.log(e);
    //     this.setState({
    //         visible: false,
    //     });
    // };
    //
    // handleCancel = e => {
    //     console.log(e);
    //     this.setState({
    //         isNewsEditing: false,
    //     });
    // };


    putNewsToEdit(editNews, id){
        console.log("New edit id: ", id);
        this.setState({
            editNewsId : id,
            editNews : editNews
        });
        this.props.dispatch( newsActions.startAddNews(this.props.news.newsList) );
    }

    render() {
        const {editNews,editNewsId } = this.state;
        const {news, companyId} = this.props;

        return (
            <div className="news-form">

                <button type="primary" onClick={this.showModal}>
                    Add
                </button>

                {news.isNewsEditing ? <NewsCreateComponent editNews={editNews} editNewsId={editNewsId} companyId={companyId}/> : null}

                {news.newsList ? news.newsList.map((item, index)=>{

                    return(
                        <NewsComponent
                            id={index}
                            key={index}
                            news = {item}

                            putNewsToEdit={this.putNewsToEdit}/>
                    );

                }) : null}
            </div>

        );
    }
}

function mapStateToProps(state) {
    const {news} = state;

    return {
        news: news,
        companyId : 12
    }
}


const connected = connect(mapStateToProps)(NewsContainer);
export { connected as NewsContainer };