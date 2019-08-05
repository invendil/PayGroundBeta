import React from "react";

import PropTypes from 'prop-types';


 class HomePage extends React.Component {
     componentDidMount() {

     }



    render() {

        const {

        } = this.props;


        return (


                    <div>

                        <div className="nav-scroller py-1 mb-2">
                            <nav className="nav d-flex justify-content-between">
                                <a className="p-2 text-muted" >World</a>
                                <a className="p-2 text-muted" >U.S.</a>
                                <a className="p-2 text-muted" >Technology</a>
                                <a className="p-2 text-muted" >Design</a>
                                <a className="p-2 text-muted" >Culture</a>
                                <a className="p-2 text-muted" >Business</a>
                                <a className="p-2 text-muted" >Politics</a>
                                <a className="p-2 text-muted" >Opinion</a>
                                <a className="p-2 text-muted" >Science</a>
                                <a className="p-2 text-muted" >Health</a>
                                <a className="p-2 text-muted">Style</a>
                                <a className="p-2 text-muted" >Travel</a>
                            </nav>
                        </div>

                        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                            <div className="col-md-6 px-0">
                                <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
                                <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                                <p className="lead mb-0"><a  className="text-white font-weight-bold">Continue reading...</a></p>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                                        <h3 className="mb-0">
                                            <a className="text-dark">Featured post</a>
                                        </h3>
                                        <div className="mb-1 text-muted">Nov 12</div>
                                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a >Continue reading</a>
                                    </div>
                                    <img
                                        className="card-img-right flex-auto d-none d-md-block"
                                        src="holder.js/200x250"



                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                                        <h3 className="mb-0">
                                            <a className="text-dark" >Post title</a>
                                        </h3>
                                        <div className="mb-1 text-muted">Nov 11</div>
                                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a >Continue reading</a>
                                    </div>
                                    <img
                                        className="card-img-right flex-auto d-none d-md-block"
                                        src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"

                                        
                                    />
                                </div>
                            </div>
                        </div>
                    </div>



        );
    }
}
HomePage.propTypes = {

};

export default HomePage;