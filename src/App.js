import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import NameForm from './components/NameForm';

function App() {
  return (
    <div>
      <NavigationBar/>
      <NameForm/>
    </div>
  );
}

export default App;
