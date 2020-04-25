import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Context } from "@store/appContext";
import Cardtv from '@views/tvshows/Cardtv'
import Header from '@lay/Header'
import Sidebar from '@lay/Sidebar'
const Index = () => {
    const { store } = useContext(Context);
    return (

     <div>
         <Header/>
         <Container>
            <Row> 
                <Col md={9}>
                    <Row>
                    { 
                    
                    store.tvs.map((tv,index) => {
                            return (
                                <Col md={4} key={index}>
                                    <Cardtv tv={tv} />
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