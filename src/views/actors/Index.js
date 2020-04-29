import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Context } from "@store/appContext";
import Cardactors from '@views/actors/Cardactors'
import Header from '@lay/Header'
import Sidebar from '@lay/Sidebar'
const Index = () => {
    const [{ store, setState }] = useContext(Context);
    return (

     <div>
         <Header/>
         <Container>
            <Row> 
                <Col md={12}>
                    <Row>
                    { 
                    
                    store.peoples.map((people,index) => {
                            return (
                                <Col md={4} key={index}>
                                    <Cardactors people={people} />
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
         </Container>
     </div>  

    )
}

export default Index;