import React, { Component } from 'react';
import {
 BrowserRouter as Router,
} from "react-router-dom";
import Header from './containers/Header/Header';
import Topmusic from './containers/Topmusic/Topmusic';
import Searchmusic from './containers/Searchmusic/Searchmusic';
import About from './containers/About/About';
import Footer from './containers/Footer/Footer'

export class App extends Component {
  render() {
    return (
      <Router>

          <Header />
          <Topmusic/>
          <Searchmusic/>
          <About/>
          <Footer/>

          

         
      </Router>
    );
  }
}

export default App;
