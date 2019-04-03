import React, { Component } from 'react';
//import Menu from '../../components/menu';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/images/logo.png';
import './styles.css';


export default class navbar extends Component {
  
  
  render() {
    return (

      
         <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
           <a className="navbar-brand" href="/"> <img src={imgLogo} alt="Logomarca" /></a>
   
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainMenu" 
             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			 <span className="navbar-toggler-icon"></span>
		   </button>

           <section className="collapse navbar-collapse" id="navbarMainMenu">
            <div className="navbar-nav ml-auto">
		        <Link to="/" className="nav-item nav-link">Home</Link>        
		        <Link to="/partnes" className="nav-item nav-link">Parceiros</Link>               
		        <Link to="/services" className="nav-item nav-link">Serviços</Link>
		        <Link to="/values" className="nav-item nav-link">Valores</Link>         
		    </div>
           </section>
         </nav>
         
        
      	
      
    );
  }
}
