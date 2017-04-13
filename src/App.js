import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />

      </div>
    );
  }
}

export default App;
