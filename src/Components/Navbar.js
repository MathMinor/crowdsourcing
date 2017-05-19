import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      showForum: false,
      showChat: false
    }
    this.chat = this.chat.bind(this);
    this.forum = this.forum.bind(this);
  }

  chat() {
    this.setState({showChat: true});
  }
  forum() {
    this.setState({showForum: true});
  }

  render(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">SiteName</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/chatroom"><i className="fa fa-comments-o fa-fw" aria-hidden="true"></i>Chatroom</Link></li>
              <li><a href="http://localhost:4567"><i className="fa fa-list-alt fa-fw" aria-hidden="true"></i>Forum</a></li>
              <li><a href="#"><i className="fa fa-sign-in fa-fw" aria-hidden="true"></i>Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar;
