import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}  />
        </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default injectContext(App);
