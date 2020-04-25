import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import React from 'react'
import { NavLink} from 'react-router-dom'


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        
      };
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">PELIS Y SERIES</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
                <Nav className="mr-auto">
                    <NavLink className="px-3 text-light" exact to="/"
                        activeStyle={activeStyle}>PELICULAS</NavLink>
                    <NavLink className="px-3 text-light" exact to="/tv"
                        activeStyle={activeStyle}>SERIES DE TV</NavLink>
                    <NavLink className="px-3 text-light" exact to="/actors"
                        activeStyle={activeStyle}>ACTORES/ACTRICES</NavLink>
                </Nav>

                <Nav>
                <Form.Control as="select" custom>
                    <option>ESPAÑOL</option>
                    <option>INGLES</option>
               
                    </Form.Control>
                    
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header;