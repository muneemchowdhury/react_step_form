import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { UserForm } from './components/LeaveItLater/UserForm';
import HomePage from './components/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/userform" component={UserForm} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router> 
    );
  }
}

export default App;
