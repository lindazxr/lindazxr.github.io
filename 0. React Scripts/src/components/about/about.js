import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>Why Apply?</h2>
            <p>{resumeData.whyApply}</p>
            <h3>What I promise to bring:</h3>
                <ul>
                  <li><span>Passion and Motivation: </span>{resumeData.reason1}</li>
                  <li><span>Quick Learner: </span>{resumeData.reason2}</li>
                  <li><span>Collaborative: </span>{resumeData.reason3}</li>
                </ul>
          </div>  
        </div>
      </section>
      </React.Fragment>
    );
  }
} 