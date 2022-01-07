import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Nav from './components/Nav';
import More from './components/More';
import EvenMore from './components/EvenMore';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/About" component={About}></Route>
          <Route path="/More" component={More}></Route>
          <Route path="/EvenMore" component={EvenMore}></Route>
        </Switch>
      </div>
    </Router>
  );
}
