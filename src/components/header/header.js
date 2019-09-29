import React, { Component } from 'react';


export default class Header extends Component {
  render() {

    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>

      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">About Me</a></li>
            <li><a className="smoothscroll" href="#about">Why Apply</a></li>
            <li><a className="smoothscroll" href="#portfolio">Bonus</a></li>
            <li><a className="smoothscroll" href="#footer">Contact</a></li>
          </ul>  
        </nav>  

        
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hello I'm {resumeData.name}.</h1>
            <h3>I am from {resumeData.fromCountry}, and currently work as a {resumeData.role} at {resumeData.company}. Scroll down to learn more <a className="smoothscroll" 
            href="#about">about why </a> I would like to participate in Techladies Bootcamp.</h3>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>

      </header>

      </React.Fragment>
    );
  }
}
