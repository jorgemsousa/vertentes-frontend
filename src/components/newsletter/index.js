import React, { Component } from 'react';
import api from '../../services/api';
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
        </form>
      </div>
    );
  }
}
