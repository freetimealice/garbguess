import React from 'react';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import Home from './Home';
import CampusForm from './CampusForm';
import Students from './Students';
import SingleStudent from './SingleStudent';
import NotFound from './NotFound';
import StudentForm from './StudentForm';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <div>
        <h1 className="logo">Juuban Municipal High School</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/campuses">Campuses</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/newcampus">New Campus</Link>
            </li>
            <li>
              <Link to="/newstudent">New Student</Link>
            </li>
          </ul>
        </nav>

        <main className="outer-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route
              exact
              path="/students/:studentId"
              component={SingleStudent}
            />
            <Route exact path="/newcampus" component={CampusForm} />
            <Route exact path="/newstudent" component={StudentForm} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
