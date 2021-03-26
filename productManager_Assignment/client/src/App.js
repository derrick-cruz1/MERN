import './App.css';
import {Router} from '@reach/router';
import ListAll from './components/ListAll';
import New from './components/New';
import Edit from './components/Edit';
import Details from './components/Details';
import React, {useEffect, useState} from 'react';

function App() {

  return (
    <div className="App">
      <New />
      <Router> 
        <ListAll path ="/product" />
        <Details path ="/product/:id" />
      </Router>
    </div>
  );
}

export default App;
