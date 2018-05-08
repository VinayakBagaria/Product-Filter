import React from 'react';
import { Container, Filter, Button } from './components/index';
import './App.css';

const App = () => (
  <div className="App">
    <Filter />
    <div className="hello">
      <Button text={1} />
    </div>
    <Container />
  </div>
);

export default App;
