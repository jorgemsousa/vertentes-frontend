import React, { Component } from 'react';
import Menu from '../../components/menu';

import imgLogo from '../../assets/images/logo.png';
import './styles.css';


export default class navbar extends Component {
  
  
  render() {
    return (
      <header id="main-header">
        <img src={imgLogo} alt="Logomarca" />
        <Menu />
      </header>
    );
  }
}
