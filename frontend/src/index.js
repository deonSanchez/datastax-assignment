import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import MainView from './Views/MainView';
import Header from './Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";


const App = () => (
  <div>
    <Router>
      <Header />
      <MainView />
    </Router>
  </div>

);

render(<App />, document.getElementById('root'));
