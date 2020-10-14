import React from 'react';
import './App.css';

import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import Detalhes from './components/Detalhes';
import Titulo from './components/titulo';




function App() {
  return (
    <Router>
      <Titulo />
      {/* <Route path='/' exact component={} / } */}
      <Route path='/detalhes;:id' exact component={Detalhes} />
      </Router>

    );
}

export default App;
