import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import ImgUfla from '../../assets/images/inbatec.png'

import './styles.css';

export default class servic extends Component {
  render() {
    return (
     <div>
        <Navbar />
       <section className="paralax-partnes">
       </section>
        <div className="container">
            <a href="http://www.inbatec.ufla.br/"><img src={ImgUfla} alt="Inbatec"/></a>
        </div>
        <Footer />
     </div>
    );
  }
}
