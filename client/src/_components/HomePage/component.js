import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from "moment-es6";
import {config} from "../../_helpers/config";
import Image from 'react-image-resizer';
import './styles.css'
 class HomePage extends React.Component {
     componentDidMount() {
         this.props.getSomeCompanies();
     }



    render() {

        const {
            companies,
            isLoading,
            user,
            error,
            categories
        } = this.props;


        return (


            <div>
                {isLoading ? <h3>Loading...</h3> :
                    <div>


                            <div className="nav-scroller py-1 mb-2">

                                <nav className="nav d-flex justify-content-between">
                                    {categories && categories.map((item, index) =>{

                                            return(
                                                <Link key={index} to={`/companies/categories/${item}`}>{item}</Link>
                                            );
                                        })

                                    }
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
                                {companies && companies.map((item, index) => {
                                    return(
                                        <div key={index} className="col-md-6">
                                            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                                <div className="card-body d-flex flex-column align-items-start">
                                                    <strong className="d-inline-block mb-2 text-primary">{item.categoryName}</strong>
                                                    <h3 className="mb-0">
                                                        <Link
                                                            className="text-dark align-items-center"
                                                            to={`/companies/${item.id}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </h3>


                                                </div>

                                                <Image
                                                    className="custom-img card-img-right flex-auto d-none d-md-block"
                                                    src={item.images[0] || "http://www.adm-mosrentgen.ru/wp-content/uploads/2017/07/%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg"}
                                                    height={250 }
                                                    width={ 250 }
                                                />

                                            </div>
                                        </div>
                                     );}
                                )}

                            </div>
                    </div>


                }
            </div>



        );
    }
}
HomePage.propTypes = {

};

export default HomePage;