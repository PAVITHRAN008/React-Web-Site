import React from 'react'
import { SHOW_TIMINGS, THEATERS_NAME } from '../../constant/Constant'
import './TheaterComponent.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showDetailsAction } from '../../store/showDetailsSlice'
function TheaterComponent(props) {
    const theaterShowDetails = {}
    theaterShowDetails.showTime = SHOW_TIMINGS
    theaterShowDetails.theatersName = THEATERS_NAME
    const dispatch = useDispatch();
    function setShowDetails(theaterName, time) {
        let showDetails = {}
        showDetails.showDayDetails = props.showDetails
        showDetails.theaterName = theaterName
        showDetails.time = time
        dispatch(showDetailsAction.setShowDetails(showDetails))
    }

    return (
        theaterShowDetails.theatersName.map((theaterName, key) => {
            return (
                <div className='theater-white-box' key={key}>
                    <div className='theaterDetails'>
                        <h5 >
                            {theaterName}
                        </h5>
                    </div>
                    <div className='timingDetails'>
                        <ul>{
                            theaterShowDetails.showTime.map((time, index) => {
                                return (
                                    <li className='listTime' key={index}>
                                        <Link className='timeUrl' to={'/seats-booking'} onClick={() => setShowDetails(theaterName, time)}>{time}</Link>
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
