import { React, useState } from 'react';
import * as ExternalLinks from '../Data/ExternalLinks.js'
import ImageLoader from './ImageLoader'
import logo from '../Images/wn.png'
import './Navibar.css'
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import RegistrationForm from './RegistrationForm.js';

export default function Navibar() {
    const [showRegForm, setShowRegForm] = useState(false)

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Image src={logo} className="logo-img mr-2" />
                <b className="brand-text">Chess Puzzle</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto h5">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={ExternalLinks.CHESS_LINK} target="_blank">Play</Nav.Link>
                    <Nav.Link href={ExternalLinks.PUZZLES_LINK} target="_blank">Puzzles</Nav.Link>
                    <Nav.Link href={ExternalLinks.RULES_LINK} target="_blank">How to play</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Item className="text-light player">
                        <div className="player-text">Player</div>
                        <div className="player-img mr-2 ml-2 d-inline-block">
                            <ImageLoader url="https://random.dog/woof.json?ref=apilist.fun" />
                        </div>
                    </Nav.Item>
                    <Button
                        variant="outline-light"
                        className="btn-sign"
                        onClick={() => {setShowRegForm(true)}}
                    >
                        Sign Up
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <RegistrationForm show={showRegForm} onHide={() => {setShowRegForm(false)}}/>
        </>
    );
}