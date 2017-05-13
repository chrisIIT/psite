import React, { Component } from 'react';
import Link from './Link.js';
import './css/LinkContainer.css';
import YTImage from './images/yt.png';
import SOImage from './images/so.png';
import LIImage from './images/li.png';
import GHImage from './images/gh.png';

class LinkContainer extends Component {

  render() {
    return(<footer className="LinkContainer">
            <Link alt="SO" src={YTImage} href="https://www.youtube.com/channel/UC0zCYS98vbq_OFVQHMsuu6A"/>
            <Link alt="YT" src={SOImage} href="http://stackoverflow.com/users/5120810/chris?tab=profile"/>
            <Link alt="GH" src={GHImage} href="https://github.com/chrisIIT"/>
            <Link alt="LI" src={LIImage} href="https://www.linkedin.com/in/chris-sanders-048a2499/"/>
           </footer>)
  }
}

export default LinkContainer
