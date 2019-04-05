import React, { Component } from 'react';
import api from '../../services/api';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

//import './styles.css';


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

        if(false){
          Alert.error('Algo deu errado, contato não enviado!',{
           position: 'top-right',
           effect: 'slide',
           timeout: 3000,
           offset:80, 
          });
        }
                
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
     
      <div className="card bg-light w-100 text-center m-2">
        <div className="card-header text-center"><strong>Cadastre-se em nossa newsletter</strong></div>
        <div className="card-body col-12">
         <div className="row pt-4">
          <form className="form-group col-12" onSubmit={this.handleNewEmail} >            
              <div className="input-group pb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input 
                  type="email" 
                  className="form-control pb-2" 
                  placeholder="seuemail@email.com" 
                  aria-label="Username" 
                  aria-describedby="addon-wrapping" 
                  value={this.state.newEmail}  
                  onChange={this.handleInputChange} 
                  required
                />
                
              </div>
              <button className="btn btn-warning btn-block" type="submit">Cadastrar</button>
              <Alert stack={{limit: 3}} html={true}/>
          </form>  
         </div> 
        </div>
      </div>  
   

    );
  }
}
