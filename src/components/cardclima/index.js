import React, { Component } from "react";
import apiClima from "../../services/apiClima";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faWind } from '@fortawesome/free-solid-svg-icons'

//import './styles.css';

export default class cardclima extends Component {
  state = {
    name: "",
    states: "",
    data: []
  };

  componentDidMount() {
    this.loadClima();
  }

  loadClima = async () => {
    const response = await apiClima.get(
      "/api/v1/weather/locale/8810/current?token=3c3e45f5ec0dfc955b9ef48d8e75ce69"
    );

    this.setState({ name: response.data.name });
    this.setState({ states: response.data.state });
    this.setState({ data: response.data.data });
  };

  render() {
    return (
      <div className="card-clima">
        <div className="card text-white bg-success m-3">
          <div className="card-header">
            <h3>
              {this.state.name} - {this.state.states}
            </h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">Tempo: {this.state.data.condition}</h5>
            <p className="card-text">Data: {this.state.data.date}</p>
            <p className="card-text">humidade: {this.state.data.humidity}%</p>
            <p className="card-text">
              Pressão do ar: {this.state.data.pressure} Pa
            </p>
            <p className="card-text">
              Temperatura: {this.state.data.temperature}ºC
            </p>
            <p className="card-text">Sensação: {this.state.data.sensation}ºC</p>
            <p className="card-text">Vento: {this.state.data.wind_direction}</p>
            <p className="card-text">
              Velocidade: {this.state.data.wind_velocity}km/h
            </p>
          </div>
        </div>
      </div>
    );
  }
}
