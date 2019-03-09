import React, { Component } from 'react';
import Iframe from 'react-iframe';

import './styles.css';

export default class contact extends Component {
  render() {
    return (
        <div className="container-contact">

            <form action="#" className="form-contact" method="post" tabindex="1">
            <h1>Contato</h1>
            <p>Mande uma mensagem com suas dúvidas e logo daremos a solução!</p>
                <label>Nome:</label>
                <input type="text" className="form-contact-input" name="nome" placeholder="Nome" required />
                <label>E-mail:</label>
                <input type="email" className="form-contact-input" name="email" placeholder="Email" required />
                <label>Mensagem:</label>
                <textarea className="form-contact-textarea" name="conteudo" placeholder="Deixe uma mensagem" required></textarea>
                <button type="submit" className="form-contact-button">Enviar</button>
            </form>

            <div className="locate">
              <h1>Campos das Vertentes</h1>
              <p>
                Rua Santa Rosa de Lima, 195<br/>
                Bairro José Conrado de Araújo<br/>
                Aracaju-SE
              </p>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d323743.9643012332!2d-37.185610541706616!3d-11.004003243053477!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1551477988118"
                        width="600"
                        height="490"
                        frameborder="0"
                        allowfullscreen/>
            </div>

        </div>

    );
  }
}
