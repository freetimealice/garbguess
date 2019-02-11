import React from 'react';
import Campuses from './campuses';
import Students from './students';
import Home from './home'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/campuses">Campuses</Link>
          <Link to="/students">Students</Link>
        </nav>

        <main>
          <Switch>
            <Route path="/campuses" component={Campuses} />
            <Route path="/students" component={Students} />
            <Route exact path ="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
