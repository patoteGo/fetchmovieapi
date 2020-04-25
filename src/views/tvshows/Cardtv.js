import React from 'react'
import Card  from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

const Cardtv = ( { tv }) => {
    return (
        <Card style={{ margin: '10px 0px'}}>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + tv.backdrop_path} />
        <Card.Body>
            <Card.Title style={{ height: '30px'}}>{tv.name}</Card.Title>
            <Card.Text style={{ height: '100px', overflow: 'hidden' }}>
            {tv.overview}
            </Card.Text>
            <Button variant="info">Ver detalles</Button>
        </Card.Body>
        </Card>
    )
}

export default Cardtv;