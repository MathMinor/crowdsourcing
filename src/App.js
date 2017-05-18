import React, { Component } from 'react';
import Navbar from './Components/Homepage/Navbar';
import Carousel from './Components/Homepage/Carousel';
import Info from './Components/Homepage/Info';
import Chatroom from './Components/Chat/Chatroom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route path="/chatroom" component={Chatroom}/>
          </div>
        </Router>
        {/* <Carousel />
        <Info /> */}
        {/* <Chatroom /> */}
      </div>
    );
  }
}

export default App;
