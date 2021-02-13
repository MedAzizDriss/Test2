import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Navbar sticky="bottom">
                <Navbar.Brand href="#ehome">Clothers Store</Navbar.Brand>
                <span >&copy; 2021.</span>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Powered by: <a href="#login">EJE</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Footer
