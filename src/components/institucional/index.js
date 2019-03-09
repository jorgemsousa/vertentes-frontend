import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export default class institucional extends Component {
  render() {
    return (
        <div className="container-institucional">
          <h2 className="institucional">Institucional</h2>
          <div className="pages">
            <p><Link to="/whoweare">Quem Somos</Link></p>
            <p><Link to="/contact">Fale Conosco</Link></p>
            <p><Link to="/associated">Associados</Link></p>
          </div>
        </div>
    );
  }
}
