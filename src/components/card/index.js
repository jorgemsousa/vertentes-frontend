import React, { Component } from 'react';

import './styles.css';

export default class card extends Component {

  
  render() {
    return (
            
      <div className="card card-noticia ml-4">
      <img className="card-img-top-noticia" src={this.props.image} alt={this.props.title} />
      <div className="card-body card-texto">
        <div className="card-text">{this.props.title}</div>
      </div>
      </div>

    );
  }
}
