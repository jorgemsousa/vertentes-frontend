import React, { Component } from 'react';
import Accordion from '../../components/accordion'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './styles.css';

export default class associate extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="paralax-associados">
        </section>
        <div className="container">
            <Accordion />
        </div>
        <Footer />
     </div>
    );
  }
}
