import React, { useEffect, useState } from 'react'
import { DAYS, MONTHS } from '../../constant/Constant';
import TheaterComponent from '../TheaterComponent/TheaterComponent';
import { Link } from 'react-router-dom'

import './ShowTimeDate.css';
const setDateDayDetails = () => {
    const dateDays = [];
    for (let i = 0; i < 5; i++) {
        let data = {};
        const date = new Date();
        date.setDate(date.getDate() + i);
        data.month = MONTHS[date.getMonth()];
        data.dates = date.getDate();
        data.days = DAYS[date.getDay()];
        dateDays.push(data)
    }
    return dateDays
}
function ShowTimeDate() {
    const [dateDays] = useState(setDateDayDetails)
    const [passData, getDateDay] = useState([])
    useEffect(() => {
        setDateDay(0)
    },[])
    function setDateDay(index) {
        let detailsShow = {};
        detailsShow = dateDays[index]
        getDateDay(detailsShow)
    }

    return (
        <div>
            <ul>
                {
                    dateDays.map((val, index) => {
                        return (
                            <li className='list' key={index}>
                                <Link className='timeDateUrl' to={'/movie-ticket-booking'} onClick={() => setDateDay(index)}>
                                    <span className='row'>{val.days}</span>
                                    <span className='row'>{val.dates}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <TheaterComponent showDetails={passData} />
        </div>
    )
}

export default ShowTimeDate
