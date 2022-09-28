import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login';
import SignUpComponent from '../SignUpComponent/SignUpComponent';

function RoutingComponent() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/singup" element={<SignUpComponent />} />
            </Routes>
        </div>
    )
}

export default RoutingComponent
