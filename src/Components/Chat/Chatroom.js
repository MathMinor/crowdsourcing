import React, {Component} from 'react';
import io from 'socket.io-client';
import Messages from './Messages';

class Chatroom extends Component {
  constructor() {
    super();
    this.socket=io("http://localhost:5000")
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      newMessage: ''
    }

  }

  handleSubmit(e) {
    let messageInput = document.getElementById("m");
    const currMessage = messageInput.value;
    messageInput.value= "";
    this.socket.emit('chat message', currMessage);
    this.setState({newMessage: currMessage});
    e.preventDefault();
    return false;
  }

  render(){
    return(
      <div>
        <Messages newMessage={this.state.newMessage} />
        <form onSubmit={this.handleSubmit}>
          <input id="m" autoComplete="off" /><button>Send</button>
        </form>
      </div>
    )
  }
}
export default Chatroom;
