import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio-create-react-app">
          <Me user={user} />
        </Route>
        <Route path="/portfolio-create-react-app/projects">
          <Projects user={user} />
        </Route>
        <Route path="/portfolio-create-react-app/work">
          <Work user={user} />
        </Route>
        <Route path="/portfolio-create-react-app/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;