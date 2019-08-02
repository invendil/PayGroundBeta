import React  from 'react';
import { connect } from 'react-redux';


class CommentsContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts : [
                {
                    title : 'Title1',
                    text : 'd;flkads;flaksd;flkasdf;lkasd;fldkf;alsdkfa;sldkfgkjhkdjjsd'
                },
                {
                    title : 'Title2',
                    text : 'd;flkads;flaksd;flkasdf;lkasd;fldkf;alsdkfa;sldkfgkjhkdjjsd'
                },
                {
                    title : 'Title3',
                    text : 'd;flkads;flaksd;flkasdf;lkasd;fldkf;alsdkfa;sldkfgkjhkdjjsd'
                },
                {
                    title : 'Title4',
                    text : 'd;flkads;flaksd;flkasdf;lkasd;fldkf;alsdkfa;sldkfgkjhkdjjsd'
                }
            ]
        }
    }

    render() {


        return (
            <div className="news-form">
                {this.state.posts.map((item, index)=>{

                    return(
                        <  NewsComponent key={index} title={item.title} text={item.text} />
                    );

                })}
            </div>

        );
    }
}
const connected = connect()(CommentsContainer);
export { connected as CommentsContainer };