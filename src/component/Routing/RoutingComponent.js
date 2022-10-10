import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login';
import SignUpComponent from '../SignUpComponent/SignUpComponent';
import { NavbarMenu } from '../../constant/NavbarMenu';
import HomeComponent from '../NavbarComponent/HomeComponent/HomeComponent';

function RoutingComponent() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SignUpComponent />} />
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
