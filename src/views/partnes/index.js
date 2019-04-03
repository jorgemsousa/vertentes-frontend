import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Card from '../../components/card';

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
        <div className="container-fluid">
          <div className="container-partnes">
          <h1>Parceiros</h1>
          <div className="d-flex flex-wrap pb-3">
          <a href="http://www.inbatec.ufla.br/" target="blank">
            <Card 
              title="Inbatec - INCUBADORA DE EMPRESAS DE BASE TECNOLÓGICA - Universidade Federal de Lavras."
              image={ImgUfla}
             /> 
          </a>
            <a href="https://www.youtube.com/channel/UCQrsD4Llg-UmlsjN9mF45Qg?view_as=subscriber" target="blank">
            <Card 
               title="JS<code> - Canal do youtube com foco em linguagens de programação em especial JavaScript."
               image={Jscode}
             />  
            </a>
          </div> 
          </div>
        </div>
        <Footer />
     </div>
    );
  }
}
