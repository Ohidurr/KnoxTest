import React from 'react'
import { Switch, useLocation, Route } from "react-router-dom"

// import './App.css';
import ImeiUpload from './components/ImeiUpload';
import Signin from './components/Signin'

const  App = () => {
  return (
    <div className="App">
   <header style={{fontSize: 'xx-large'}}>Knox Test</header>
   <Signin />
    <ImeiUpload />
    </div>
  );
}

export default App;
