import React, { Component } from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './styles.css';

export default class values extends Component {
  render() {
    return (

        <div>
          <Navbar />
          <section className="paralax-values">
          </section>
          <div className="container-fluid">
            <div className="container-values">
             <h1>Valores</h1>
             <div className="values">
                <p>
                <strong>Pessoas</strong> - Pessoas são a base do desempenho da nossa organização.
                Acreditamos no seu potencial de crescimento, quando estabelecido através da construção
                de relações produtivas e colaborativas, e por atitudes de respeito, transparência, 
                empatia e comprometimento. 
                </p>
                <p>
                <strong>Segurança</strong> - Adotamos a segurança como um valor e nao como uma prioridade.
                 Ela deve estar no centro de tudo o que fazemos. Deve ser refletida através de atitudes 
                 que respeitem a vida e proporcionem a sustentabilidade.
                </p>
                <p>
                <strong>Sustentabilidade</strong> - Adotamos práticas éticas que visam o crescimento 
                econômico de nossa organização sem agredir o meio ambiente e que colaborem para o 
                desenvolvimento da sociedade. 
                </p>
                <p>
                <strong>Ética</strong> - Nossos compromissos e ações são baseados nos princípios da ética
                e da transparência, criando relações de confiança com nossos colaboradores, parceiros, 
                fornecedores e sociedade. 
                </p>
                <p>
                <strong>Comunidade</strong> - Reconhecemos que nossos acionistas, colaboradores, parceiros
                e fornecedores sao parte integrante no processo de desenvolvimento e melhoria de nossos
                resultados.
                </p>    
              </div>
              </div>  
          </div>
          <Footer />
       </div>
       
    );
  }
}
