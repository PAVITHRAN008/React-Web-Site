import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../service/httpServic';
import MovieListComponent from '../../MovieListCom/MovieListComponent'

function HomeComponent() {
  const [setDetails, getDetails] = useState([]);
  useEffect(() => {
    getMovieList();
  }, []);
  const getMovieList = () => {
    let req = API_URL
    fetch(req)
      .then(response => response.json())
      .then(data => {
        // console.log(data.results[0])
        getDetails(data.results)
      });
  }
  console.log(setDetails)
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

export default HomeComponent
