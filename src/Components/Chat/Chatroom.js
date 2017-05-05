import React, {Component} from 'react';
import io from 'socket.io-client';
import Messages from './Messages';

class Chatroom extends Component {
  constructor() {
    super();
    this.socket=io("http://localhost:5000")
    this.onSubmit=this.onClick.bind(this)

    this.state = {
      newMessage: ''
    }

  }

  onClick(e) {
    let messageInput = document.getElementById("m");
    const currMessage = messageInput.value;
    messageInput.value= "";
    this.socket.emit('chat message', currMessage);
    this.setState({newMessage: currMessage});
    return false;
  }

  render(){
    return(
      <div>
        <Messages example={this.state.newMessage}/>
        <input id="m" autoComplete="off" /><button onClick={(e) => this.onClick(e)}>Send</button>
      </div>
    )
  }
}
export default Chatroom;
