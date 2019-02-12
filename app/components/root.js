import React from 'react';
import Campuses from './campuses';
import SingleCampus from './singleCampus'
import NewCampus from './newCampus'
import Students from './students';
import SingleStudent from './singleStudent'
import NotFound from './notFound'
import NewStudent from './newStudent'
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
          <Link to="/newcampus">New Campus</Link>
          <Link to="/newstudent">New Student</Link>
        </nav>

        <main>
          <Switch>
            <Route exact path ="/campuses" component={Campuses} />
            <Route exact path ="/students" component={Students} />
            <Route exact path ="/campuses/:campusId" component={SingleCampus} />
            <Route exact path ="/students/:studentId" component={SingleStudent} />
            <Route exact path ="/newcampus" component={NewCampus} />
            <Route exact path ="/newstudent" component={NewStudent} />
            <Route exact path ="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
