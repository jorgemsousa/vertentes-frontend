import React from 'react';

import {BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './views/main';
import Contact from './views/contact';
import Associated from './views/associated';
import Whoweare from './views/whoweare';
import Services from './views/servic';
import Partnes from './views/partnes';
import Values from './views/values';

const Routes = () => (
  <BrowserRouter>
    <Switch>
       <Route exact path="/" component={Main} />
       <Route path="/contact" component={Contact} />
       <Route path="/associated" component={Associated} />
       <Route path="/whoweare" component={Whoweare} />
       <Route path="/services" component={Services} />
       <Route path="/partnes" component={Partnes} />
       <Route path="/values" component={Values} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
