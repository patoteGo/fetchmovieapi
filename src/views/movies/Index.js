import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Context } from "./../../store/appContext";
import Cardmovie from './Cardmovie'
const Index = ({ Movies }) => {
    const { store } = useContext(Context);
    return (

     <div>
         <Container>
            <Row> 
             
                { 
                    
                store.movies.map((movie,index) => {
                        return (
                            <Col md={4} key={index}>
                            <Cardmovie movie={movie} />
                            </Col>   
                        )
                })
                }
                
            </Row>
         </Container>
     </div>  

    )
}

export default Index;