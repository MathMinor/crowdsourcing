import React, {Component} from 'react';
import Iframe from 'react-iframe';

class Forum extends Component {

  render(){
    return(
      <Iframe url="https://bing.com"
        width="100%"
        height="100%"
        position="absolute"
        allowFullScreen/>
    )
  }
}
export default Forum;
