import React, {Component} from 'react';

class Carousel extends Component{
  constructor() {
    super();
    let currentArticles = [];

    this.state = {
      currentNews: currentArticles
    }

  }

  componentDidMount(){
    const source = 'techcrunch';
    const apiKey = '577fe23a15a04de097ec8fa33b5392e4';
    const sortBy = 'latest';
    const apiUrl = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        this.setState({currentNews: body.articles});
      })
  }

  render(){console.log(this.state.currentNews);
    let listItems = this.state.currentNews.map((articleText,i) =>
      <li data-target="newsCarousel" key={i.toString()} data-slide-to={i} className={ (i===0) ? "active": ""}></li>
    );

    let newsImage = this.state.currentNews.map((articleText, i) =>
      <div className={ (i===0) ? "item active": "item" } key={i.toString()}>
        <img src={articleText.urlToImage} alt=""/>
      </div>
    );
    return(
      <div>

        <div id="newsCarousel" className=" carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {listItems}
          </ol>

          <div className="carousel-inner" role="listbox">

            {newsImage}

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
