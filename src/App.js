import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import NameForm from './components/NameForm';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = props =>{
  return (
    <Router>
      <NavigationBar user={props.user}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </NavigationBar>
    </Router>
  );
}

export default App;
