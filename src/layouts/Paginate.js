import React, { useContext }  from 'react'
import { Context } from "@store/appContext";
import Pagination from 'react-bootstrap/Pagination';

function Paginate() {
    const [ state ] = useContext(Context);
    console.log('pag',state.store.paginatemovies);
    const paginate = () => {
        if(state.store.paginatemovies){
            return state.store.paginatemovies.page
        }
        
    }

    const paginatelast = () => {
        if(state.store.paginatemovies){
            return state.store.paginatemovies.total_pages
        }
        
    }

    const handlePage = (e) => {
        state.actions.page(e);
        state.actions.loadAll(state.store.lang, state.store.page); 
        // console.log('store2', state);
    }

    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item onClick={() => handlePage(`&page=1`)}>{1}</Pagination.Item>
            <Pagination.Ellipsis />

    
            {paginate()-2 > 0 && <Pagination.Item onClick={() => handlePage(`&page=${paginate()-2}`)}>{paginate()-2}</Pagination.Item>}
            {paginate()-1 > 0 && <Pagination.Item onClick={() => handlePage(`&page=${paginate()-1}`)}>{paginate()-1}</Pagination.Item>}
            <Pagination.Item active>{paginate()}</Pagination.Item>
            {paginate()+1 < paginatelast() && <Pagination.Item onClick={() => handlePage(`&page=${paginate()+1}`)}>{paginate()+1}</Pagination.Item>}
            {paginate()+2 < paginatelast() && <Pagination.Item onClick={() => handlePage(`&page=${paginate()+1}`)}>{paginate()+2}</Pagination.Item>}
            

            <Pagination.Ellipsis />
            <Pagination.Item onClick={() => handlePage(`&page=${paginatelast()}`)}>{paginatelast()}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}


export default Paginate;