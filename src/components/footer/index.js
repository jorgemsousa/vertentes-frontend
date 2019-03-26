import React, { Component } from 'react';
import Newsletter from '../../components/newsletter';
import Social from '../../components/Social';
import Institucional from '../../components/institucional';

import './styles.css';

export default class footer extends Component {
  
  render() {
    
    return (
      
     <div>
      <div className="footer-body">
        
        <Newsletter />
        <Social />
        <Institucional />
      </div>   
      <div className="footerbotton">
      Copyrights &copy; 2019 Todos os direitos reservados   
      </div>
    </div>  
    );
  }
}
