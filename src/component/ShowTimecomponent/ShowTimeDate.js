import React from 'react'
import { DAYS } from '../../constant/Constant';
import TheaterComponent from '../TheaterComponent/TheaterComponent';

import './ShowTimeDate.css';

function ShowTimeDate() {
    const dateDays = [];
    for (let i = 0; i < 5; i++) {
        let data = {};
        const date = new Date();
        date.setDate(date.getDate() + i);
        data.dates = date.getDate();
        data.days = DAYS[date.getDay()];
        dateDays.push(data)
    }
    return (
        <div>
            <ul>
                {
                    dateDays.map((val, index) => {
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
            <TheaterComponent />
        </div>
    )
}

export default ShowTimeDate
