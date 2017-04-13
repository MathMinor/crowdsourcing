import React, {Component} from 'react';

class Navbar extends Component {
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
            <a className="navbar-brand" href="#">SiteName</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><i className="fa fa-comments-o fa-fw" aria-hidden="true"></i>Chatroom</a></li>
              <li><a href="#"><i className="fa fa-list-alt fa-fw" aria-hidden="true"></i>Forum</a></li>
              <li><a href="#"><i className="fa fa-sign-in fa-fw" aria-hidden="true"></i>Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar;
