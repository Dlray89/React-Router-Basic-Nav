import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";


const 
const App = () => (
  <div>
  <Route exact path="/">
  <Home />
  </Route>

  <Route>
    <Navigation />
    </Route>
    <Route path="/About">
    <About />
    </Route>
    <Route path="/Contact">
    <Contact />
    </Route>

  </div>
);

export default App;
