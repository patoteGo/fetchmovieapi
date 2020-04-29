import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import React, { useContext } from 'react'
import { NavLink} from 'react-router-dom'
import { Context } from "@store/appContext";
import { URL } from '../api/config'
const Header = () => {
    const [ state ] = useContext(Context);
    const activeStyle = {
        fontWeight: "bold",
      };

    const handleLang = (e) => {
        console.log('select', e.target.value);
        if(e.target.value === 'INGLES'){
            // console.log('cambios',state, setState);
            state.actions.loadAll(URL.LANG_EN, state.store.page); 
        } else{
            state.actions.loadAll(URL.LANG_ES, state.store.page); 
        }
    }
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
                <Form.Control onChange={handleLang} as="select" custom>
                    <option>ESPAÑOL</option>
                    <option>INGLES</option>
                    </Form.Control>
                    
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header;