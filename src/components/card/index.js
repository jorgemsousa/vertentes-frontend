import React, { Component } from 'react';

import './styles.css';

export default class card extends Component {

  
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt={this.props.title}/>
        <div className="corpo">
            <h4><b>{this.props.title}</b></h4> 
        </div>
      </div>
    );
  }
}
