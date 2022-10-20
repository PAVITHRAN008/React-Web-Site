import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login';
import SignUpComponent from '../SignUpComponent/SignUpComponent';
import { NavbarMenu } from '../../constant/NavbarMenu';
import HomeComponent from '../NavbarComponent/HomeComponent/HomeComponent';
import MovieBookComponent from '../MovieBookingComponent/MovieBookComponent';
import SeatBookinComponent from '../SeatBookingComponent/SeatBookinComponent';


function RoutingComponent() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SignUpComponent />} />
                <Route path="/movie-ticket-booking" element={<MovieBookComponent />} />
                <Route path="/seats-booking" element={<SeatBookinComponent />} />
                {NavbarMenu.map((manu, index) => {
                    return (
                        <Route key={index} path={manu.path} element={manu.component} />
                    )
                })}
            </Routes>
        </div>
    )
}

export default RoutingComponent
