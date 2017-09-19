import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../Page/Home';
import Projects from '../Page/Projects';
import Contact from '../Page/Contact';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Projects' component={Projects}/>
        <Route path='/Contact' component={Contact}/>
      </Switch>
    );
  }
}

export default Main;
