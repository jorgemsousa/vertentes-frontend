import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Api from '../../services/api';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


import './styles.css';

export default class contact extends Component {

  
  state = {
     newName: '',
     newEmail: '',
     newSubject: '',
  }

  handleNewContact = async (e) => {

    e.preventDefault()

    const { newName, newEmail, newSubject } = this.state;

    

    if (!(newName || newEmail || newSubject)) return;

    const name = this.state.newName;
    const email = this.state.newEmail;
    const subject = this.state.newSubject;

    await Api.post('contacts', { name, email, subject })
    
    if(false){
      Alert.error('Algo deu errado, contato não enviado!',{
       position: 'top-right',
       effect: 'slide',
       timeout: 3000,
       offset:80, 
      });
    }
    
    Alert.success('Contato enviado com sucesso!',{
      position: 'top-right',
      effect: 'slide',
      timeout: 3000,
      offset:80, 
    });
    

    this.setState({ newEmail: '', newName: '', newSubject: '' })
    
  }

  handleInputName = (e) => {
    this.setState({ newName: e.target.value })
  }
   
  handleInputEmail = (e) => {
    this.setState({ newEmail: e.target.value })
  }

  handleInputSubject = (e) => {
    this.setState({ newSubject: e.target.value })
  }

  render() {
    return (
        <div className="container-contact">

            <form className="form-contact" onSubmit={this.handleNewContact}>
            <h1>Contato</h1>
            <p>Mande sua mensagem com sugestão ou dúvidas que logo o responderemos!</p>
                <label>Nome:</label>
                <input 
                    type="text" 
                    className="form-contact-input" 
                    name="nome" 
                    placeholder="Nome"  
                    value={this.state.newName}  
                    onChange={this.handleInputName}                 
                    required 
                />
                <label>E-mail:</label>
                <input 
                    type="email" 
                    className="form-contact-input" 
                    name="email" 
                    placeholder="Email" 
                    value={this.state.newEmail}  
                    onChange={this.handleInputEmail}  
                    required
                />
                <label>Mensagem:</label>
                <textarea 
                    className="form-contact-textarea" 
                    name="conteudo" 
                    placeholder="Deixe uma mensagem" 
                    value={this.state.newSubject}  
                    onChange={this.handleInputSubject}
                    required  
                >
                </textarea>
                <button type="submit" className="btn btn-warning col-12">Enviar</button>
            </form>

            <div className="locate">
              <h1>Campos das Vertentes</h1>
              <p>
                Rua Santa Rosa de Lima, 195<br/>
                Bairro José Conrado de Araújo<br/>
                Aracaju-SE
              </p>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d323743.9643012332!2d-37.185610541706616!3d-11.004003243053477!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1551477988118"
                        width="48%"
                        height="75%"
                        frameborder="0"
                        allowfullscreen/>
            </div>

        </div>

    );
  }
}
