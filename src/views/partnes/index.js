import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import ImgUfla from '../../assets/images/inbatec.png';
import Jscode from '../../assets/images/jscodeLogo.png';

import './styles.css';

export default class servic extends Component {
  render() {
    return (
     <div>
        <Navbar />
       <section className="paralax-partnes">
       </section>
        <div className="container">
          <div className="partnes">
            <a href="http://www.inbatec.ufla.br/" blank><img src={ImgUfla} alt="Inbatec"/></a>
            <a href="https://www.youtube.com/channel/UCQrsD4Llg-UmlsjN9mF45Qg?view_as=subscriber" blank><img src={Jscode} alt="JS<code>"/></a>
          </div>            
        </div>
        <Footer />
     </div>
    );
  }
}
