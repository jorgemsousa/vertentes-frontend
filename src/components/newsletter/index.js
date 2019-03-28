import React, { Component } from 'react';
import api from '../../services/api';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import './styles.css';


export default class newsletter extends Component {

      state = {
        newEmail: '',
      };

      handleNewEmail = async (e) => {
        e.preventDefault();
        
        const { newEmail } = this.state;

        if(!newEmail.length) return;

        const email = this.state.newEmail;    

        await api.post('newsletters', { email });
                
        Alert.success('Cadastro Efetuado', {
           position: 'top-right',
           effect: 'slide',
           timeout: 3000,
           offset:80,           
        });
        
        this.setState({ newEmail: '' });
        
        

      };

      handleInputChange = ( e ) => {
         this.setState({ newEmail: e.target.value });
      };

      
  render() {
    return (
      <div className="row-newsletter">
        <form onSubmit={this.handleNewEmail}>
            <h2>Cadastre-se em nossa Newsletter</h2>
            <div className="container-footer">
                <input type="email" placeholder="seuemail@exemplo.com" name="mail" required value={this.state.newEmail} onChange={this.handleInputChange}/>
                <button className="button" type="submit">Cadstrar</button>
            </div>
            <Alert stack={{limit: 3}} html={true}/>
        </form>
      </div>
    );
  }
}
