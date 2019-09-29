import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let cityData = this.props.cityData;

    return (
      <React.Fragment>
      <footer id="footer">
        <div className="row">
          

          <div className="twelve columns">

            <ul className="social-links">
              <li><h3>CONTACT ME: </h3></li> 
              <li><a href={resumeData.facebookLink} target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href={resumeData.linkedinLink} target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href={resumeData.gmailLink} target="_blank"><i className="fa fa-envelope" /></a></li>
            </ul>
            <p className="resources">
              <span>Addtional resources</span> used to build this site: <a title="Styleshout" href="https://medium.com/technoetics/create-a-developer-portfolio-using-reactjs-d34ea1bfb18e">Saurabh Mhatre's Medium Blog</a> and <a title="Styleshout" href="https://medium.com/technoetics/create-a-developer-portfolio-using-reactjs-d34ea1bfb18e">Ceevee's Styleshout Design</a>  
            </p>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>  

      </footer> 
      </React.Fragment>
    );
  }
}

