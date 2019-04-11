import React from 'react';
import Clothes from './clothes';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <div>
        <h1 className="logo">Garb-Guess</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/clothes">Your Clothes</Link></li>
          </ul>
        </nav>
        <main className="outer-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/clothes" component={Clothes} />
            <Route component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
