import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Photos from './components/photos/photos';
import Contact from './components/contact/contact';

import resumeData from './resumeData';
import cityData from './cityData';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Photos cityData={cityData}/>
        <Contact resumeData={resumeData}/>
      </div>
    );
  }
}
export default App; 
