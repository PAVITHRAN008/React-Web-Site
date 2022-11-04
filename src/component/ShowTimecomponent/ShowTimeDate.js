import React from 'react'
import { DAYS, MONTHS } from '../../constant/Constant';
import TheaterComponent from '../TheaterComponent/TheaterComponent';

import './ShowTimeDate.css';

function ShowTimeDate(props) {
    const dateDays = [];
    let showDetails = {};
    showDetails.movieDetails = props.movieDetails
    for (let i = 0; i < 5; i++) {
        let data = {};
        const date = new Date();
        date.setDate(date.getDate() + i);
        data.month = MONTHS[date.getMonth()];
        data.dates = date.getDate();
        data.days = DAYS[date.getDay()];
        dateDays.push(data)
    }
    return (
        <div>
            <ul>
                {
                    dateDays.map((val, index) => {
                        let showDayDetails = {}
                        showDayDetails.date = val.dates;
                        showDayDetails.day = val.days;
                        showDayDetails.month = val.month;
                        showDetails.showDayDetails = showDayDetails;
                        return (
                            <li className='list' key={index}>
                                <a className='timeDateUrl' href='/'>
                                    <span className='row'>{val.days}</span>
                                    <span className='row'>{val.dates}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <TheaterComponent showDetails={showDetails} />
        </div>
    )
}

export default ShowTimeDate
