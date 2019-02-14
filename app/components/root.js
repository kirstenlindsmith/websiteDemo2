import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AllCampuses, AllStudents, SingleCampus, SingleStudent } from './index';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <div id="navDiv">
            <h1>Darkheart</h1>
            <p>Academy of Javascript</p>
          </div>
          <div>
            <img id="logo" src="https://i.redd.it/51g20oqa4si01.png" />
          </div>
          <ul id="navList">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/campuses">Campuses</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/students/:studentId" component={SingleStudent} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
