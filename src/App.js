import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import NameForm from './pages/NameForm';
import Home from './pages/Home';
import TodoList from './pages/Todo/TodoList';
import TodoItem from './pages/Todo/TodoItem';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = props =>{
  return (
    <Router>
      <NavigationBar user={props.user}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Todo' component={TodoList} />
          <Route exact path='/TodoItem' component={TodoItem} />
          <Route exact path='/NameForm' component={NameForm} />
        </Switch>
      </NavigationBar>
    </Router>
  );
}

export default App;
