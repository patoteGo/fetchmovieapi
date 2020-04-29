import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Context } from "@store/appContext";
import Cardmovie from '@views/movies/Cardmovie'
import Header from '@lay/Header'
import Paginate from './../../layouts/Paginate';
// import Sidebar from '@lay/Sidebar'
const Index = () => {
    const [ state ] = useContext(Context);
    console.log('store', state);
    // const realMovies = store.movies.results;
    // console.log(realMovies);
    const handlePage = (e) => {
        state.actions.page(e);
        state.actions.loadAll(state.store.lang, state.store.page); 
        // console.log('store2', state);
    }
    return (

     <div>
         <Header/>
         <Container>
            <Row> 
                <div>
                    <button onClick={() => handlePage('&page=2')}>PAGE 2</button>
                </div>

                <Col md={'12'}>
                    <Row>
                    { 
                        
                        state.store.movies.map((movie,index) => {
                            return (
                                <Col md={4} key={index}>
                                    <Cardmovie movie={movie} />
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