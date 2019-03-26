import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Card from '../../components/card';

import ImgMSolo from '../../assets/images/microbiologiasolo.jpg';
import ImgCafe from '../../assets/images/cafe.jpeg';
import ImgPalestra from '../../assets/images/palestras.jpeg';
import ImgCultura from '../../assets/images/culturas.jpg';
import ImgMedicinais from '../../assets/images/medicinais.jpeg';
import ImgCevada from '../../assets/images/cevada.jpg';

import './styles.css';

export default class servic extends Component {
  render() {
    return (
     <div>
        <Navbar />
       <section className="paralax-services">          
       </section> 
      <div className="container"> 
      <div className="row"> 

             <Card
               title="Desenvolvimento de novas moléculas com atividade microbiológica visando a redução de defensivos."
               image={ImgMSolo}
             />
             <Card 
                title="Desenvolvimento de produtos visando a homogenização da florada em cafeeiro e safra ZERO na cultura."
                image={ImgCafe}
              />  
              <Card 
                title="Proferimento de palestras para o setor produtivo através de cooperativas ligadas ao setor."
                image={ImgPalestra}
              />  
              <Card 
                title="Manejo das principais culturas de interesse do agronegócio brasileiro visando o alcance de maiores produtividades. "
                image={ImgCultura}
              /> 
        </div>
        <div className="row">

              <Card 
                title="Culturas: café, soja e cereais de inverno, com ênfase em aveia forrageira e cevada."
                image={ImgCevada}
              />  
              <Card 
                title="Manejo orgânico de espécies medicinais recomendadas pela ANVISA voltada para produção de matéria prima “in natura”."
                image={ImgMedicinais}
              />             
          
       </div>
       </div>       
        <Footer />
     </div>
    );
  }
}
