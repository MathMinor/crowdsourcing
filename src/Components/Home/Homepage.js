import React, {Component} from 'react';
import Carousel from './Carousel';
import Info from './Info';

class Homepage extends Component {
  render(){
    return(
      <div>
        <Carousel />
        <Info />
      </div>
    )
  }
}
export default Homepage;
