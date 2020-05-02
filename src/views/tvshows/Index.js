import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Context } from "@store/appContext";
import Cardtv from '@views/tvshows/Cardtv'
import Header from '@lay/Header'
import Paginate from '@lay/PaginateTv';
const Index = () => {
    const [{ store, setState }] = useContext(Context);
    return (

     <div>
         <Header/>
         <Container>
         <Paginate/>
            <Row> 
                <Col md={12}>
                    <Row>
                    { 
                    
                    store.tvs.map((tv,index) => {
                            return (
                                <Col md={3} key={index}>
                                    <Cardtv tv={tv} />
                                </Col>   
                            )
                    })
                    }
                    </Row>
                </Col>
                {/* <Col md={3}>
                    <Sidebar/>
                </Col> */}
            </Row>
            <Paginate/>
         </Container>
     </div>  

    )
}

export default Index;