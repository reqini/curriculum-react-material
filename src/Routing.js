import React, { Component } from 'react';

// Pages
import Home from './pages/Home';

// Layouts
import MainLayout from './layouts/MainLayout';
import PublicRoute from './layouts/LayoutRoute';

import { BrowserRouter, Switch } from 'react-router-dom';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <PublicRoute
              exact
              path='/'
              component={Home}
              layout={MainLayout}
            />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routing;