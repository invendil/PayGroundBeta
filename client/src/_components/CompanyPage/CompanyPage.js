import React  from 'react';
import { connect } from 'react-redux';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Carousel from 'react-bootstrap/Carousel'
import './style.css'

class CompanyPage extends React.Component {


    render() {


        return (

                <Carousel
                    interval = {null}
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 center-block "
                            src="http://res.cloudinary.com/morzh29/image/upload/v1564411923/mood1_ajeqgo.png"
                            alt="First slide"



                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/I/81zQdSJc0nL._SL1500_.jpg"
                            alt="Third slide"


                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/I/81zQdSJc0nL._SL1500_.jpg"
                            alt="Third slide"

                        />


                    </Carousel.Item>
                </Carousel>

        );
    }
}
const connected = connect()(CompanyPage);
export { connected as CompanyPage };