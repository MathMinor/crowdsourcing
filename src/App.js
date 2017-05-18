import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Homepage from './Components/Home/Homepage';
import Chatroom from './Components/Chat/Chatroom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route path="/chatroom" component={Chatroom}/>
            <Route exact path="/" component={Homepage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
