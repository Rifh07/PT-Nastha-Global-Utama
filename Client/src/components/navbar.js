import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

function navbar() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Navbar.Brand to="/" as={Link} className="ml-5">
            <img
                alt=""
                src="logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {' Navbar Brand'}
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-5">
                    <Nav.Link to="/add-event" as={Link}>
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />Add Event
                    </Nav.Link>
                    <Nav.Link to="/dashboard" as={Link}>Dashboard</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navbar
