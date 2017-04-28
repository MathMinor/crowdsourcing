import React, {Component} from 'react';
import io from 'socket.io-client';

class Chatroom extends Component {
  constructor() {
    super();
    this.socket=io("http://localhost:5000")
    this.onSubmit=this.onSubmit.bind(this)
  }

  onSubmit(e) {
    console.log(e.target);
    //this.socket.emit('chat message', "Hello World");
    //console.log(document.getElementById("m").value);
    let messageInput = document.getElementById("m");
    const currMessage = messageInput.value;
    messageInput.value= "";
    this.socket.emit('chat message', currMessage);
    return false;

  }

  render(){
    return(
      <div>
        <ul id="messages"></ul>
        <form onSubmit={(e) => this.onSubmit(e)}  action="">
          <input id="m" autoComplete="off" /><button>Send</button>
        </form>
      </div>
    )
  }
}
export default Chatroom;
