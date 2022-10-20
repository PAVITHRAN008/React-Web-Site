import React, { useEffect } from 'react'
import { API_URL } from '../../../service/httpServic';

function MovieComponent() {
  // const [setDetails, getDetails] = useState();
  useEffect(() => {
    getMovieList();
  }, []);
  const getMovieList = () => {
    let req = API_URL
    console.log(req)
  }
  return (
    <div>
    </div>
  )
}

export default MovieComponent
