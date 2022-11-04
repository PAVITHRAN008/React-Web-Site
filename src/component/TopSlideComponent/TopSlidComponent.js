import React from 'react';
import Card from 'react-bootstrap/Card';
import { IMG_URL } from '../../service/httpServic';
import Carousel from 'react-bootstrap/Carousel';
import "./TopSlidComponent.css"
function TopSlidComponent(props) {
    return (
        <div className='slidImg'>
            <Carousel>
                {
                    props.movieDetails.map((val, index) => {
                        return (index < 5) ? (
                            <Carousel.Item key={index}>
                                <Card.Img className='slidImg' src={IMG_URL + val.backdrop_path} />
                                <Carousel.Caption>
                                    <h3>{val.title}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ) : null
                    })
                }
            </Carousel>
        </div>
    )
}

export default TopSlidComponent
