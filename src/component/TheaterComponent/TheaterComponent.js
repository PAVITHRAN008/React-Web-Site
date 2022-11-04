import React from 'react'
import { SHOW_TIMINGS, THEATERS_NAME } from '../../constant/Constant'
import './TheaterComponent.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showDetailsAction } from '../../store/showDetailsSlice'
function TheaterComponent(props) {

    // const dispatch = useDispatch();
    // dispatch(showDetailsAction.setShowDetails(props))
    function setShowDetails(props) {
        // e.preventDefault();
        // let showDetails = {}
        // showDetails.movieDetails = props.showDetails.movieDetails
        // showDetails.showDayDetails = props.showDetails.showDayDetails
        // showDetails.theaterName = theaterName
        // showDetails.time = time
        console.log(props)

    }
    const showTime = SHOW_TIMINGS
    const theatersName = THEATERS_NAME
    return (
        theatersName.map((theaterName, key) => {
            return (
                <div className='theater-white-box' key={key}>
                    <div className='theaterDetails'>
                        <h5 >
                            {theaterName}
                        </h5>
                    </div>
                    <div className='timingDetails'>
                        <ul>{
                            showTime.map((time, index) => {
                                return (
                                    <li className='listTime' key={index}>
                                        <Link className='timeUrl' to={'/seats-booking'} onClick={setShowDetails(props)}>{time}</Link>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            )
        })
    )
}

export default TheaterComponent
