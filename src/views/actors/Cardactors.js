import React from 'react'
import Card  from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

const Cardactors = ( { people }) => {
    return (
        <Card style={{ margin: '10px 0px'}}>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + people.profile_path} />
        <Card.Body>
            <Card.Title style={{ height: '30px'}}>{people.name}</Card.Title>
            <Card.Text style={{ height: '100px', overflow: 'hidden' }}>
            
            {
            people.known_for.map((know, index) => {
              return <div key={index}>{know.original_name}</div>
            
            })
            }
            </Card.Text>
            <Button variant="info">Ver detalles</Button>
        </Card.Body>
        </Card>
    )
}

export default Cardactors;