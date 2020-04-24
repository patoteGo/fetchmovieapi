import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Context } from "@store/appContext";
import Cardmovie from '@views/movies/Cardmovie'
import Header from '@lay/Header'
import Sidebar from '@lay/Sidebar'
import { CardLink } from 'react-bootstrap/Card';
const Index = ({ Movies }) => {
    const { store } = useContext(Context);
    return (

     <div>
         <Header/>
         <Container>
            <Row> 
                <Col md={9}>
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
                </Col>
                <Col md={3}>
                    <Sidebar/>
                </Col>
            </Row>
         </Container>
     </div>  

    )
}

export default Index;