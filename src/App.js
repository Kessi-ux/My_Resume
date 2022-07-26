import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from './components/Home';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Portfolios from './components/Portfolios';
import About from './components/About';
import Navbar from './components/Navbar'

// import js photo
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import logo from './logo.svg';

function App() {
  return (
    <Router>
      <>
      <Route exact path = '/' component= {Home} />
      <Routes>
        <Route path = '/skills' component= {Skills}/>
        <Route path = '/educations' component= {Educations}/>
        <Route path = '/experiences' component= {Experiences}/>
        <Route path = '/portfolios' component= {Portfolios}/>
        <Route path = '/About' component= {About}/>
        <Route path = './Navbar' component= {Navbar}/>
      </Routes>
      </>
      </Router>
  );
}

export default App;
