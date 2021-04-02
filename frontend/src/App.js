import React from 'react'
import { Switch, useLocation, Route } from "react-router-dom"

import './App.css';
import './components/ImeiUpload';

const  App = () => {
  return (
    <div className="App">
   <header>knox test</header>
    <imeiUpload />
    </div>
  );
}

export default App;
