import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./styles.css";

export default class institucional extends Component {
  render() {
    return (
      <div className="card bg-light w-100 text-center">
        <div className="card-header text-center">
          <strong>Institucional</strong>
        </div>
        <div className="card-body">
          <div className="row pt-3">
            <div className="container-inst col-12">
              <p>
                <Link to="/whoweare">Quem Somos</Link>
              </p>
              <p>
                <Link to="/contact">Fale Conosco</Link>
              </p>
              <p>
                <Link to="/associated">Associados</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
