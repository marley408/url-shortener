import React from 'react';
import './App.css';
import Home from './Pages/Home';
import History from './Pages/History';
import Landing from './Pages/Landing';
import { UserProvider } from './Components/UserContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/history" component={History} />
            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
