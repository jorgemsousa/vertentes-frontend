import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

 import './styles.css';

export default class cardSocial extends Component {
  render() {
    return (
        <div className="container-social">
          <h2 className="socialIcon">Redes Sociais</h2>
          <div className="icon">
            <SocialIcon url="http://whatsapp.com/in/jaketrent" />&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="http://youtube.com/in/jaketrent" />&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="http://twitter.com/in/jaketrent" />&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="http://facebook.com/in/jaketrent" />&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          
        </div>
    );
  }
}
