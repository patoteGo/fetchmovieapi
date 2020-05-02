import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Context } from "@store/appContext";
import Cardmovie from '@views/movies/Cardmovie'
import Header from '@lay/Header'
import Paginate from '@lay/PaginateMovie';
// import Sidebar from '@lay/Sidebar'
const Index = () => {
    const [ state ] = useContext(Context);
    console.log('store', state);
    // const realMovies = store.movies.results;
    // console.log(realMovies);
    return (

     <div>
         <Header/>
         <Container>
            <Paginate/>
            <Row> 
              

                <Col md={'12'}>
                    <Row>
                    { 
                        
                        state.store.movies.map((movie,index) => {
                            return (
                                <Col md={3} key={index}>
                                    <Cardmovie movie={movie} />
                                </Col>   
                            )
                        })
                        
                    }
                    </Row>
                </Col>
            </Row>
            <Paginate/>
         </Container>
     </div>  

    )
}

export default Index;