import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/Home';
import About from './containers/About';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </ConnectedRouter>
  )
}

export default App;
