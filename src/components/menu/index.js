import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './styles.css';



export default class menu extends Component {
  render() {
    return (
    <div className="topnav" id="myTopnav">
        <Link to="/" className="active">Home</Link>
        <Link to="#clima">Clima</Link>
        <Link to="#cotacoes">Cotações</Link>
        <Link to="/partnes">Parceiros</Link>
        <Link to="#portifolio">Portfólio</Link>        
        <Link to="/services">Serviços</Link>
        <Link to="#login">Login</Link>
    </div>
    );
  }
}
