import React, {Component} from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
     newMessage: []
   };

  }

  componentWillReceiveProps(nextProps){
    let messages = nextProps.newMessage;
    this.state.newMessage.push(messages);
    this.setState({newMessage: this.state.newMessage});
  }

  render(){
    console.log(this.state.newMessage);
    console.log(this.props.newMessage);
    let listItems = this.state.newMessage.map((number,i) =>
        <li key={i}>
          {number}
        </li>
    );
    return(
      <div>
        <ul id="messages">{listItems}</ul>
      </div>
    )
  }

}

export default Messages;
