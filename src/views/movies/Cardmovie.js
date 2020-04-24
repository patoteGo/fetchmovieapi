import React, { useState } from 'react'
import Card  from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

const Cardmovie = ( { movie }) => {
    return (
        <Card style={{ margin: '10px 0px'}}>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} />
        <Card.Body>
            <Card.Title style={{ height: '30px'}}>{movie.title}</Card.Title>
            <Card.Text style={{ height: '100px', overflow: 'hidden' }}>
            {movie.overview}
            </Card.Text>
            <Button variant="info">Ver detalles</Button>
        </Card.Body>
        </Card>
    )
}

export default Cardmovie;