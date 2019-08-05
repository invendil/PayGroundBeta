import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from "moment-es6";
import {config} from "../../_helpers/config";
import Image from 'react-image-resizer';
import './styles.css'
 class CompaniesList extends React.Component {
     componentDidMount() {
         const {category} = this.props.match.params;
         this.props.getAllByCategory(category);
     }



    render() {

        const {
            companies,
            isLoading,

            error

        } = this.props;


        return (


            <div>
                {isLoading ? <h3>Loading...</h3> :
                    <div className="container " style={{marginTop : '13px'}}>


                        <div className="row align-content-md-center">
                            {companies && companies.map((item, index) => {
                                return(
                                    <div key={index} className="">
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
                            {error && <div> Companies doesn't exist</div>}


                        </div>


                    </div>


                }
            </div>



        );
    }
}
CompaniesList.propTypes = {

};

export default CompaniesList;