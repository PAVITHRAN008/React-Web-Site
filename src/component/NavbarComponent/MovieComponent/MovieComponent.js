import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../service/httpServic';
import MovieListComponent from '../../MovieListCom/MovieListComponent';


function MovieComponent() {
  const [setDetails, getDetails] = useState([]);
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
    <div className='backGroundSpace'>
      {
        setDetails.map((movieDetails, index) => {
          return (
            <MovieListComponent key={index} movieList={movieDetails} />
          )
        })
      }
    </div>
  )
}

export default MovieComponent
