import React, {Component} from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
     newMessage: ''
   };

  }
  
  render(){
    return(
      <div>
        <ul id="messages">{this.props.example}</ul>
      </div>
    )
  }

}

export default Messages;
