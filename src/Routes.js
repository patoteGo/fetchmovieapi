import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from '@views/movies/Index'
import Actors from '@views/actors/Index';
import Tv from '@views/tvshows/Index';
import Moviesdetail from '@views/movies/MovieDetails';
import Tvdetail from '@views/tvshows/TvDetails';
import Actordetail from '@views/actors/ActorDetails';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Movies}  />
                <Route exact path="/movie/:id" component={Moviesdetail} />
                <Route exact path="/tv" component={Tv}  />
                <Route exact path="/tv/:id" component={Tvdetail} />
                <Route exact path="/actors" component={Actors}  />
                <Route exact path="/actor/:id" component={Actordetail} />
                <Route render={ () => <h2>404</h2> } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;