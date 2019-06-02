import React, { Component } from "react";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import "./styles.css";

export default class whoweare extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="paralax-whoweare" />
        <div className="container-whoweare">
          <h1>Quem somos?</h1>
          <p>
            A empresa <strong>Campos das Vertentes Consultoria Agrícola</strong>{" "}
            tem como metas primordiais o desenvolvimento de tecnologias
            sustentáveis, consultorias a produtores rurais e estabelecimento de
            parcerias com empresas para testes de novos insumos como fungicidas,
            inseticidas, herbicidas, nutrientes minerais, organo-minerais,
            bioestimulantes, dentre outros. Nesse contexto, a empresa procura
            associar a eficiência desses insumos a respostas agro fisiológicas
            das plantas. O corpo técnico dessa empresa de consultoria tem larga
            experiência no campo da Agronomia/Fisiologia Vegetal e Fitotecnia,
            com prestações de serviços a grandes empresas como Bayer Crop
            Science (2006- 2018), Ajinomoto 2000-2001); Aventis Crop Science
            (2001). A equipe técnico científica está a cargo do Eng o Agr o Dr.
            Amauri Alves de Alvarenga graduado pela ESAL/UFLA(1975), mestre em
            Fisiologia Vegetal (UFV, 1979) e doutor pela UNICAMP(1987),
            professor titular pela UFLA no período de 1977-2017, do Eng°
            Florestal Dr. Jean Marcel Sousa Lira, graduado em Engenharia
            Florestal pela UFS (2009), mestre e doutor em Agronomia/Fisiologia
            Vegetal pela UFLA (2012 e 2015) e o Eng° Agr° Gustavo Jaconi Borges,
            graduado em 2019 pela UFLA com experiência em experimentação
            agrícola de grandes culturas. A empresa conta ainda com
            colaboradores de outras instituições como graduados e ex-alunos
            mestres e doutores .
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
