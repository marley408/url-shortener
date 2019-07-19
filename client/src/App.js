import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import History from './Pages/History';
import Landing from './Pages/Landing';
import RegisterPage from './Pages/RegisterPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/history" component={History} />
        />
      </Switch>
    </div>
  </Router>
);

export default App;
