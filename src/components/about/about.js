import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>

      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>Why Apply?</h2>
            <p>I have always been a tech nerd. I have built my first website at the age of 10 using Dreamweaver. 
              After much debate between pursuing an Economics or a Computer Science major, I opted for the former. 
              However, more than 10 years later, the interest in ‘building’ with code never faded. This ultimately led me to 
              leave my job in management consulting to start at a new career in tech (albeit in a 
              non-engineering role). Within the past year at Google. I have improved my SQL skills and learned 
              Python during my spare time. After a friend introduced me to Techladies, I unhesitantly signed up for 
              the 3 pre-bootcamp sessions. Each session further reinvigorated my love for coding.
            </p>
            <h3>What I promise to bring:</h3>
                <ul>
                <li><span>Passion and Motivation:</span> I have voluntarily acquired all my coding skills thus far (which includes SQL, Python, and more recently HTML, CSS and JS). I have set a goal to build a web-based gaming app within the next 3-6 months. </li>
                <li><span>Quick Learner:</span> As mentioned above, I taught myself both SQL and Python using Youtube and reading other people’s codes. I find it quite easy to interpret code and repurpose it for my own use -- a skillset I also leveraged to build this page :) </li>
                <li><span>Collaborative:</span> I have worked in several countries, including Canada, US, Singapore, Malaysia and Thailand, and have thus polished my ability to work with people from different backgrounds. Given that the bootcamp project will be completed in pairs, I have full confidence that my ability to collaborate and project manage will help to drive for the best outcomes. </li>
                </ul>

          </div>  
        </div>
      </section>
      </React.Fragment>
    );
  }
} 