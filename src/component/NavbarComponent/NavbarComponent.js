import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import mainLogo from "../../assets/movielogo.PNG";
import Nav from 'react-bootstrap/Nav';
import React from 'react'
import { NavbarMenu } from '../../constant/NavbarMenu';
import { Routes, Route, NavLink } from 'react-router-dom';
function NavbarComponent() {
    return (
        <div>
            <Navbar className='nav color-nav mb-4' variant="light">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={mainLogo}
                            width="250"
                            height="50"
                            className="d-inline-block align-top"
                        />{'\u00a0\u00a0'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="color-menu me-auto">
                            {NavbarMenu.map((menuItem, index) => {
                                return (
                                    <NavLink className={menuItem.className} to={menuItem.path} key={index}>
                                        {menuItem.icon}&nbsp;{menuItem.name}</NavLink>
                                )
                            })}
                            {/* <Nav.Link href="/home">HOME</Nav.Link>
                        <Nav.Link href="/movie">MOVIE</Nav.Link>
                        <Nav.Link href="/theatres">THEATRES</Nav.Link>
                        <Nav.Link href="/order">ORDERS</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href='/'>SignUp</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Routes>
                    {NavbarMenu.map((manu, index) => {
                        return (
                            <Route key={index} path={manu.path} element={manu.component} />
                        )
                    })}
                </Routes>
            </div>
        </div>
    );
}

export default NavbarComponent
