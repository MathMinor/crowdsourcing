import React, { Component } from 'react';
import Navbar from './Components/Homepage/Navbar';
import Carousel from './Components/Homepage/Carousel';
import Info from './Components/Homepage/Info';
import Chatroom from './Components/Chat/Chatroom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar />
        <Carousel />
        <Info /> */}
        <Chatroom />
      </div>
    );
  }
}

export default App;
