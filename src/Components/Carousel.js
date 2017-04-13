import React, {Component} from 'react';
import photo1 from '../imgs/photo1.jpg';
import photo2 from '../imgs/photo2.jpg';
import photo3 from '../imgs/photo3.jpg';
import photo4 from '../imgs/photo4.jpg';
import soho from '../imgs/soho.jpg';

class Carousel extends Component{
  render(){
    return(
      <div>

        <div id="newsCarousel" className=" carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="newsCarousel" data-slide-to="0" className="active"></li>
            <li data-target="newsCarousel" data-slide-to="1"></li>
            <li data-target="newsCarousel" data-slide-to="2"></li>
            <li data-target="newsCarousel" data-slide-to="3"></li>
            <li data-target="newsCarousel" data-slide-to="4"></li>
          </ol>

          <div className="carousel-inner" role="listbox">

            <div className="item active">
              <img src={photo1} alt="First"/>
            </div>

            <div className="item">
              <img src={photo2} alt="Second"/>
            </div>

            <div className="item">
              <img src={photo3} alt="Third"/>
            </div>

            <div className="item">
              <img src={photo4} alt="Fourth"/>
            </div>

            <div className="item">
              <img src={soho} alt="Fourth"/>
            </div>

          </div>

          <a className="left carousel-control" href="#newsCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#newsCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>
    )
  }
}
export default Carousel;
