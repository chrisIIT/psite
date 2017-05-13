import React, { Component } from 'react';
import './css/Link.css';

class Link extends Component {
  render() {
    return (<a href={this.props.href} className="Link"><img alt={this.props.alt} src={this.props.src}></img></a>)
  }
}

export default Link;
