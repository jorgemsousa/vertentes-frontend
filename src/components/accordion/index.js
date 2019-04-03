import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import User from '../../assets/images/user.png';

import 'react-accessible-accordion/dist/fancy-example.css';
import './styles.css';

export default class accordion extends Component {
  render() {
    return (
     <div className="conteudo">
      <h1>Associados</h1><br/>    
       
      <Accordion>
      <AccordionItem>
          <AccordionItemTitle aria-expanded="true">
           <h3><img src={User} alt="perfil" /> Jean Marcel</h3>
          </AccordionItemTitle>
          <AccordionItemBody >
              <p><b>IDENTIFICAÇÃO</b><br/><br/>
                   <p>Jean Marcel Sousa Lira, CPF: 014381265-30, engenheiro florestal pela 
                   Universidade Federal de Sergipe (UFS) em 2009, com mestrado em e doutorado 
                   em Agronomia/Fisiologia Vegetal pela Universidade Federal de Lavras (UFLA) 
                   em 2015.</p> <p>Atualmente pesquisador PNPD pela Universidade Federal de Alfenas, 
                   onde desenvolve projetos na área de certificação ambiental, certificação 
                   agrícola e análise de dados.</p> <p>Trabalhou como pesquisador no projeto intitulado 
                   <strong> “Desenvolvimento de tecnologias e aplicações de dados espectrais para elucidar 
                   impactos do déficit hídrico no balanço de carbono em cafeeiros”</strong>, com o intuído 
                   de desenvolver uma tecnologia de análise remota, através de imagens de satélite 
                   e índice de vegetação de diferença normalizada (NDVI), para mensurar a 
                   produtividade das lavouras de café.</p> <p>Com experiência em ecofisiologia vegetal 
                   em grandes culturas agrícolas (milho, café, soja, feijão, etc), vêm trabalhando 
                   com análise das trocas gasosas (fotossíntese, condutância estomática e 
                   transpiração) das folhas. Também desenvolve pesquisas na área de fisiologia do 
                   estresse e testes na aplicação de produtos agrícolas na proteção contra 
                   estresses abiótico (seca, altas temperaturas, etc.) e bióticos 
                   (ataque de patógenos, herbivoria, etc.).</p><p> Atualmente auxilia na consultoria 
                   técnica de empresas para testes de produtos no campo. Na área acadêmica 
                   publicou treze artigos, um capítulo de livro e participou de mais de trinta 
                   e oito bancas entre trabalhos de qualificação, conclusão de curso e aquisição 
                   de título de mestre ou doutor.</p><br/><br/>

                    <b>CONTATO</b><br/><br/>
                    Fone: (35) 99277-1283<br/>
                    E-mail: jmslira1283@gmail.com<br/>
                    Link Currículo:<br/>  
                    <a href="http://buscatextual.cnpq.br/buscatextual/busca.do" target="blank">http://buscatextual.cnpq.br/buscatextual/busca.do</a></p>
          </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
          <AccordionItemTitle>
              <h3><img src={User} alt="perfil" />Amauri Alves</h3>              
          </AccordionItemTitle>
          <AccordionItemBody>
              <p><b>IDENTIFICAÇÃO</b><br/><br/>
                    Amauri Alves de Alvarenga, CPF: 183959376-87, engenheiro agrônomo pela 
                    Universidade Federal de Lavras (UFLA) em 1975, com mestrado em Fisiologia 
                    Vegetal e doutorado em Ciências com ênfase em Biologia Vegetal pela 
                    Universidade Federal de Campinas (UNICAMP) em 1987. Atualmente professor 
                    aposentado pela UFLA, onde exerceu docência por 40 anos lecionando a 
                    disciplina de Fisiologia Vegetal e Crescimento e Desenvolvimento Vegetal. 
                    Nesta instituição, foi fundador e coordenador do programa de 
                    Agronomia/Fisiologia Vegetal, onde orientou 12 trabalhos de conclusão de 
                    curso, 12 trabalhos de especialização, 39 orientações de bolsa de iniciação 
                    científica, 64 dissertações de mestrado e 21 teses de doutorado trabalhando 
                    principalmente nas linhas de pesquisas de Fisiologia do Desenvolvimento 
                    Vegetal e Fitopatologia de grandes culturas. No Conselho Nacional de 
                    Desenvolvimento Científico e Tecnológico (CNPq) foi bolsista de produtividade 
                    desde 1980 até a sua aposentadoria. Na Fundação de Amparo à Pesquisa do Estado 
                    de Minas Gerais exerceu a função de consultor técnico científico entre os anos 
                    de 2016 e 2017. Como consultor prestou serviços para empresa Bayer e Ajinomoto 
                    na área de pesquisa e desenvolvimento de produtos. Na área acadêmica é membro 
                    fundador da Sociedade Brasileira de Fisiologia Vegetal, autor e coautor de dez 
                    livros e nove capítulos na área de fisiologia vegetal e publicou mais de 109 
                    artigos científicos, proferiu dezenas de palestras em eventos científicos e não 
                    científicos e liderou um grupo de pesquisa em Ecofisiologia de espécies 
                    florestais e medicinais pelo CNPq.<br/><br/>    

                    <b>CONTATO</b><br/><br/>
                    Setor de Fisiologia Vegetal da Universidade Federal de Lavras, Cx. Postal 3037, 
                    Lavras-MG.<br/>
                    Fone: (35)3829-1367/ (35)98855-3571/ (35) 99156-8376<br/>
                    E-mail: amaurialvarenga50@gmail.com </p>
          </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
          <AccordionItemTitle>
              <h3><img src={User} alt="perfil" /> Gustavo Jaconi</h3>              
          </AccordionItemTitle>
          <AccordionItemBody>
              <p><b>IDENTIFICAÇÃO</b><br/><br/>
                    Gustavo Jaconi Borges, CPF: 430510758-92, engenheiro agrônomo pela 
                    Universidade Federal de Lavras (UFLA) em 2019. Trabalhou com condicionamento 
                    osmótico em sementes de tomate e feijão de 2013-2015, no Laboratório de 
                    Crescimento e Desenvolvimento Vegetal no setor de Fisiologia Vegetal da 
                    Universidade Federal de Lavras (UFLA). No mesmo setor trabalhou com 
                    sensoriamento remoto na produtividade de lavouras de café pelo período de 
                    2015-2016, no laboratório ainda no departamento de fisiologia vegetal da UFLA 
                    trabalhou no Laboratório de Ecofisiologia Vegetal (LEV). Em 2017, trabalhou 
                    tratos culturais de cereais na Empresa de Pesquisa Agropecuária de Minas 
                    Gerais (EPAMIG). Também trabalhou com experimentação agrícola de grandes 
                    culturas na empresa Terras Gerais no ano de 2018.<br/><br/>

                    <b>CONTATO</b><br/><br/>
                    Fone: (19) 98204-5272<br/>
                    E-mail: gjborges1@gmail.com </p>
          </AccordionItemBody>
      </AccordionItem>
      </Accordion>
    </div>

    );
  }
}
