import React from 'react';
import './App.scss';
import Header from '../Header';
import Landing from '../../pages/Landing'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="champ-select-app">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
