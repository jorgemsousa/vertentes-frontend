import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';



import './styles.css';

export default class servic extends Component {
  render() {
    return (
     <div>
        <Navbar />
       <section className="paralax-services">
       </section>        
        <Footer />
     </div>
    );
  }
}
