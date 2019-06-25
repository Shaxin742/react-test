import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import routers from './routers';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path='/login' component={Login}/> */}
          {routers.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact ? route.exact : false}
                path={route.path}
                render={(props) => (
                  <route.component {...props} routers={Array.isArray(route.routers) ? route.routers : []} />
                )}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
