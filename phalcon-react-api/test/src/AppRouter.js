import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import TheApp from './TheApp';
import NotFoundPage from './NotFoundPage';
import Edit from './Edit';
//import Destructuring  from '../Destructuring'



const AppRouter = () => {
    return (
    <BrowserRouter>
        <div>  
          <Switch>          
          <Route path="/" component={TheApp} exact={true}/>
            <Route path="/edit/:id" component={Edit} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        </BrowserRouter>)
}


export default AppRouter;
