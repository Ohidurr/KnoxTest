import React from 'react'
import { Switch, useLocation, Route } from "react-router-dom"

import './App.css';
import ImeiUpload from './components/ImeiUpload';

const  App = () => {
  return (
    <div className="App">
   <header style={{fontSize: 'xx-large'}}>Knox Test</header>
    <ImeiUpload />
    </div>
  );
}

export default App;
