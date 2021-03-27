import React from 'react';
import * as ExternalLinks from '../ExternalLinks.js'
import logo from '../Images/wn.png'
import './Navibar.css'
import { Button, Image, Nav, Navbar } from 'react-bootstrap';

export default function Navibar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Image src={logo} className="logo-img mr-2" />
                <b className="brand-text">Chess Puzzle</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto h5">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={ExternalLinks.PUZZLE_LINK} target="_blank">Solve</Nav.Link>
                    <Nav.Link href={ExternalLinks.RULES_LINK} target="_blank">How to play</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="outline-light" className="btn-sign">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}