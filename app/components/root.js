import React from 'react';
import Campuses from './campuses';
import Students from './students';
import SingleCampus from './singleCampus'
import SingleStudent from './singleStudent'
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
            <Route exact path ="/campuses" component={Campuses} />
            <Route exact path ="/students" component={Students} />
            <Route exact path ="/campuses/:campusId" component={SingleCampus} />
            <Route exact path ="/students/:studentId" component={SingleStudent} />
            <Route exact path ="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
