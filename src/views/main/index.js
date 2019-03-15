import React, { Component } from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Card from '../../components/card';
import CardClima from '../../components/cardclima';
import TableClima from '../../components/tableClima';
import { Link } from 'react-router-dom';

import './styles.css';

export default class main extends Component {

  render() {
    return (
    <div>
     <Navbar /> 
     <section className="paralax-top">
       <h1 className="text-center">CAMPOS DAS VERTENTES</h1>
       <p className="paralax">Busca de novas tecnologias para o desenvolvimento de uma agricultura voltada para a sustentabilidade.</p>
       <Link className="btn btn-danger" to="/whoweare">Saiba Mais</Link>
     </section>
      <div className="container">
        Notícias
        <div className="row-noticia">
          <Card
             title="JBS Biodiesel vende 260 milhões de litros em 2018"
             image="https://s2.glbimg.com/J_vjBYM5mqoML-dadn4gpyQu4tY=/780x440/e.glbimg.com/og/ed/f/original/2019/01/28/gas-station-fuel-diesel-fuel-gas-pump-energy-pump-1596622.jpg"
             link="#noticia"
          />
          <Card
            title="Importação de soja da China recua em janeiro;"
            image="https://s2.glbimg.com/h3PRQtTUbrsZc7FbB9k-Cz-HuqU=/780x440/e.glbimg.com/og/ed/f/original/2019/02/22/20190219181752_img_0728.jpg"
            link="#noticia"
          />
          <Card
            title="Cosan convoca AGE para deliberar incorporação..."
            image="https://s2.glbimg.com/5s4X9hP5I8oQZ1UQSUQ5Q4lZn9o=/780x440/e.glbimg.com/og/ed/f/original/2016/09/27/smto_colhedora_2.jpg"
            link="#noticia"
          />
          <Card
            title="Empresa abre vagas de estágio..."
            image="https://s2.glbimg.com/LsztvpBc5ekHXgZMxqusat7pYEU=/e.glbimg.com/og/ed/f/original/2019/01/22/sem-titulo-2.jpg"
            link="#noticia"
          />
        </div><br/>
        Clima
        <div className="row-clima">
          <CardClima />
          <TableClima />
        </div>
        
      </div>
      <section className="paralax-botton">
       <h1 className="text-center">Nossos Valores</h1>
       <p className="paralax">Transparência, qualidade, sigilo, esses são alguns dos nossos valores.</p>
       <Link className="btn btn-danger" to="#servicos">Saiba Mais</Link>
     </section>
     <Footer />
    </div>
  );
  }
}
