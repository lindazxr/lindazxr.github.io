import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let cityData = this.props.cityData;

    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h3>[Bonus Section] Cities I've Live In:</h3>

            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/beer.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{cityData.city1}</h5>
                        <p>{cityData.country1}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/coffee.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{cityData.city2}</h5>
                        <p>{cityData.country2}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/farmerboy.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{cityData.city3}</h5>
                        <p>{cityData.country3}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
                  
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/judah.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{cityData.city4}</h5>
                        <p>{cityData.country4}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={cityData.photo1} alt="" />
            <div className="description-box">
              <h4 className="categories">
                <i className="fa fa-map-marker" />
                {cityData.city1}, {cityData.country1}
              </h4>
              <p>{cityData.description1}</p>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={cityData.photo2} alt="" />
            <div className="description-box">
              <h4 className="categories">
                <i className="fa fa-map-marker" />
                {cityData.city2}, {cityData.country2}
              </h4>
              <p>{cityData.description2}</p>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={cityData.photo3} alt="" />
            <div className="description-box">
              <h4 className="categories">
                <i className="fa fa-map-marker" />
                {cityData.city3}, {cityData.country3}
              </h4>
              <p>{cityData.description3}</p>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={cityData.photo4} alt="" />
          <div className="description-box">
              <h4 className="categories">
                <i className="fa fa-map-marker" />
                {cityData.city4}, {cityData.country4}
              </h4>
              <p>{cityData.description4}</p>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
           
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
} 