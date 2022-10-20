import React from 'react'
import Card from 'react-bootstrap/Card';
import "./MovieBook.css";
import { useLocation } from 'react-router-dom';
import { IMG_URL } from '../../service/httpServic';
import { Image } from 'react-bootstrap';
import ShowTimeDate from '../ShowTimecomponent/ShowTimeDate';
function MovieBookComponent() {
    const getDetails = useLocation();
    let getBookMovieDetails = getDetails.state.shearDetails.movieList
    return (
        <div>
            <div className='img-background-card'>
                <Card.Img className="img-background " src={IMG_URL + getBookMovieDetails.backdrop_path} />
                <Image className="MovieBookImg" variant="top" src={IMG_URL + getBookMovieDetails.poster_path} />
                <div className='movie-details'>
                    <h2>{getBookMovieDetails.title}</h2>
                    <div className='movie-short-details'>
                        <h5>{getBookMovieDetails.original_language}</h5>
                        <h6>{getBookMovieDetails.release_date}</h6>
                    </div>
                    <div className='movie-casts'>
                        <p>{getBookMovieDetails.overview}</p>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='section-content'>
                    <ShowTimeDate />
                </div>
            </div>
        </div>
    )
}

export default MovieBookComponent
