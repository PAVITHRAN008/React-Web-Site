import React from 'react'
import { SHOW_TIMINGS } from '../../constant/Constant'
import './TheaterComponent.css'
import { Link } from 'react-router-dom'

function TheaterComponent() {
    const showTime = SHOW_TIMINGS
    return (
        <div className='theater-white-box'>
            <div className='theaterDetails'>
                <h5>
                    name name name name name name name name name name name name name name
                </h5>
            </div>
            <div className='timingDetails'>
                <ul>{
                    showTime.map((time, index) => {
                        return (
                            <li className='listTime' key={index}>
                                {/* <a className='timeUrl' href='/seats-booking'>
                                    {time}
                                </a> */}
                                <Link className='timeUrl' to={'/seats-booking'}>{time}</Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default TheaterComponent
