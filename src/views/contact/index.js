import React, { Component } from 'react';
import Contact from '../../components/contact';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './styles.css';

export default class main extends Component {

  render() {
    return (
    <div>
      <Navbar />
     <section className="paralax-contact">
     </section>
      <div className="container">
      <Contact />     
      </div>
      <Footer />
    </div>
  );
  }
}
