import React from 'react';
import Card from 'react-bootstrap/Card';
// import mainLogo from "../../assets/movielogo.PNG";
import "./MovieListComp.css";
import Button from 'react-bootstrap/Button';
import { IMG_URL } from '../../service/httpServic';

function MovieListComponent(props) {
    console.log(props)
    let movieList = props.movieList
    return (
        <Card className='Card'>
            <Card.Img className="MovieImg" variant="top" src={IMG_URL + movieList.poster_path} />
            <Card.Body>
                <Card.Title className='Title'>{movieList.title}</Card.Title>
                <Card.Text className='Title'>{movieList.original_language}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Button className='btn' variant="flat">Book</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieListComponent
