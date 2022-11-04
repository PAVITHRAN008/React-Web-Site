import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../service/httpServic';
import MovieListComponent from '../../MovieListCom/MovieListComponent';
import TopSlidComponent from '../../TopSlideComponent/TopSlidComponent';
import './HomeComponent.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { showDetailsAction } from '../../../store/showDetailsSlice';
import { useDispatch } from 'react-redux'

function HomeComponent() {
  const [setDetails, getDetails] = useState([]);
  const dispatch = useDispatch();
  dispatch(showDetailsAction.setMovieList(setDetails))
  useEffect(() => {
    getMovieList();
  }, []);
  const getMovieList = () => {
    let req = API_URL
    fetch(req)
      .then(response => response.json())
      .then(data => {
        getDetails(data.results)
      });
  }
  return (
    <div>
      <TopSlidComponent movieDetails={setDetails} />
      <Slide slidesToScroll={1} slidesToShow={4} indicators={true} duration={2000} >
        {
          setDetails.map((movieDetails, index) => {
            return (
              <MovieListComponent key={index} movieList={movieDetails} />
            )
          })
        }
      </Slide>
    </div>
  )
}

export default HomeComponent
