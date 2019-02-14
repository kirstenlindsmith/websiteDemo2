import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { AllCampuses, AllStudents } from './index';

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
            <img 
              id="logo"
              src="https://i.redd.it/51g20oqa4si01.png"
            />
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
            <Route path='/campuses' component={AllCampuses} />
            <Route path='/students' component={AllStudents} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
