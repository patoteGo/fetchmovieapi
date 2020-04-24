import React, { useContext } from 'react'

import { Link } from "react-router-dom";

import { Context } from "@store/appContext";
import MovieIndex from "@views/movies/Index"
function Home() {
    const { store } = useContext(Context);
    return(

        <div>
            <MovieIndex/>
            {/* <div>
          <ul className="list-group">
          {
            // console.log(store.movies)
            store.movies.map((item, index) => {
              return (

                <li key={index}>
                  {item.title}
                  <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + item.poster_path} alt={item.title}/>
                </li>
              )
            })
          }
          </ul>
        </div> */}
        </div>
    )
}

export default Home;