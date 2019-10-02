import React, { Component } from 'react';
export default class Photos extends Component {
  render() {
    let cityData = this.props.cityData;

    let wrapper = cityData.map ((item) => 
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <a href={item.id} title><img alt="" src={item.photoS} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{item.city}</h5>
              <p>{item.country}</p>
            </div>
          </div>
        <div className="link-icon"><i className="icon-plus" />
        </div>
        </a>
        </div>
      </div>  
    );
    
    let modal = cityData.map ((item) => 
      <div id={item.modalId} className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={item.photo} alt="" />
        <div className="description-box">
          <h4 className="categories"><i className="fa fa-map-marker" />{item.city}, {item.country}</h4>
          <p>{item.description}</p>
        </div>
        <div className="link-box">
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>
    );

    return (
      <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h3>[Bonus Section] Cities I've Live In:</h3>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {wrapper}
            </div>  
          </div>  
          {modal}
        </div> 
      </section>
      </React.Fragment>
    );
  }
} 