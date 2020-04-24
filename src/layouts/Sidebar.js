import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'
import Cardside from '@views/sidebar/Cardside'
const Sidebar = () => {
    return (
       <div className="fixed-bottom offset-9 col-3 sm-d-block">
            <Cardside title="Peliculas Favoritas"/>
            <Cardside title="Actores Favoritos"/>
            <Cardside title="Series Favoritos"/>
        </div>

        
    )
}

export default Sidebar;