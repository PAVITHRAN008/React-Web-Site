import React from 'react';
import Card from 'react-bootstrap/Card';
import "./MovieListComp.css";
import Button from 'react-bootstrap/Button';
import { IMG_URL } from '../../service/httpServic';
import { useNavigate } from "react-router-dom";
import { showDetailsAction } from '../../store/showDetailsSlice';
import { useDispatch } from 'react-redux'
function MovieListComponent(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const book = (e) => {
        dispatch(showDetailsAction.setSelectMovieDetails(props))
        e.preventDefault();
        navigate('/movie-ticket-booking', {
            state: {
                shearDetails: props
            }
        });
    }
    let movieList = props.movieList
    return (
        <Card className='Card'>
            <Card.Img className="MovieImg" variant="top" src={IMG_URL + movieList.poster_path} />
            <Card.Body>
                <Card.Title className='Title'>{movieList.title}</Card.Title>
                <Card.Text className='Title'>{movieList.original_language}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Button className='btn' variant="flat" onClick={book}>Book</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieListComponent
