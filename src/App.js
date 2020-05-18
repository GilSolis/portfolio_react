import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import './App.css';
import Resume from "./components/Resume"
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path={process.env.BASE_URL} component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route component={Home} />
    </>

  );
}

export default App;
