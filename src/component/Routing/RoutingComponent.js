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
                <Route path="/React-Web-Site" element={<HomeComponent />} />
                <Route path="/React-Web-Site/login" element={<Login />} />
                <Route path="/React-Web-Site/singup" element={<SignUpComponent />} />
                <Route path="/React-Web-Site/movie-ticket-booking" element={<MovieBookComponent />} />
                <Route path="/React-Web-Site/seats-booking" element={<SeatBookinComponent />} />
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
