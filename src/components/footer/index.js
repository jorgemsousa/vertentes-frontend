import React, { Component } from 'react';
import Newsletter from '../../components/newsletter';
import Social from '../../components/Social';
import Institucional from '../../components/institucional';

import './styles.css';

export default class footer extends Component {
  
  render() {
    
    return (
      
     <div className="row">
      <div className="footer-body d-flex flex-wrap">        
        <Newsletter />
        <Social />
        <Institucional />
      </div>   
      <div className="footerbotton">
      &copy; 2019 Todos os direitos reservados - Campos das Vertentes   
      </div>
    </div>  
    );
  }
}
