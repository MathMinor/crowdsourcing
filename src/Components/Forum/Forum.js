import React, {Component} from 'react';
import Iframe from 'react-iframe';

class Forum extends Component {

  render(){
    return(
      <Iframe url="https://youtu.be/embeded/ZOukNzbPMCQ"
        width="100%"
        height="100%"
        display="initial"
        position="relative"
        allowFullScreen/>
    )
  }
}
export default Forum;
