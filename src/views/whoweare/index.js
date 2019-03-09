import React, { Component } from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './styles.css';

export default class whoweare extends Component {
  render() {
    return (

        <div>
          <Navbar />
          <section className="paralax-whoweare">
          </section>
          <div className="container-whoweare">
             <h1>Quem somos?</h1>
                <p>
                A <strong>Simples Consultoria </strong>é uma empresa focada no desenvolvimento de 
                soluções de tecnologia da informação, tendo como diferencial a facilidade de uso de 
                seus produtos.
                </p>
                <p>
                Formada por especialistas de larga vivência nas áreas de gestão do conhecimento, 
                arquitetura da informação, usabilidade e soluções web, sua equipe conta com 
                profissionais especializados em Python, Zope&nbsp; e Plone, reconhecidos pelas 
                comunidades de programadores de todo o mundo.
                </p>
                <p>
                Desde a especificação de um projeto até os ajustes finais de desempenho de um 
                servidor, a <strong>Simples Consultoria </strong>possui expertise técnica e prática 
                em todas as etapas necessárias para o desenvolvimento de projetos web para a sua 
                empresa, de intranets a portais. &nbsp;
                </p>
                <p>
                Em seu portfólio, após cinco anos de experiência no uso de Plone, contabiliza-se mais 
                de 100 casos de sucesso na utilização da ferramenta, o que nos credencia como uma das 
                maiores autoridades em Plone no Brasil e nos permite atuar em todas as fases de 
                elaboração de um site ou intranet a partir desta tecnologia
                </p>
                <p>
                Além de todo o conhecimento específico, nossos serviços de consultoria e soluções 
                de gestão de conteúdo alinham os objetivos da sua organização com a facilidade de uso 
                em ambiente web. Isso resulta em uma combinação sob medida para sua corporação, com os 
                profissionais da sua empresa receberão a capacitação técnica necessária para gerenciar 
                de maneira autônoma o projeto.
                </p>    
          </div>
          <Footer />
       </div>
       
    );
  }
}
