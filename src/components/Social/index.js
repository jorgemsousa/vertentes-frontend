import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class cardSocial extends Component {
  render() {
    return (
        
          <div className="card bg-light w-50 text-center m-2">
            <div className="card-header text-center"><strong>Redes Sociais</strong></div>
            <div className="card-body">
             <div className="row pt-3">
               <div className="container d-flex justify-content-around flex-wrap pr-3 pt-3 mb-3">
                <SocialIcon url="http://whatsapp.com/in/jaketrent" className="m-1" />
                <SocialIcon url="http://youtube.com/in/jaketrent" className="m-1"/>
                <SocialIcon url="http://twitter.com/in/jaketrent" className="m-1"/>
                <SocialIcon url="http://facebook.com/in/jaketrent" className="m-1"/>
               </div>
             </div> 
            </div>
          </div>  

   
    );
  }
}
