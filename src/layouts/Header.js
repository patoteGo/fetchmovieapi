import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from 'react'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">BLOCKBUSTER</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#movie">Peliculas</Nav.Link>
                    <Nav.Link href="#tv">Series de TV</Nav.Link>
                    <Nav.Link href="#people">Actrices/Actores</Nav.Link>
                    
                </Nav>

                <Nav>
                    <NavDropdown title="LANG" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Español</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ingles</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header