import React, { Component } from 'react';
import apiClima from '../../services/apiClima';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faPlus  } from '@fortawesome/free-solid-svg-icons'

import imgTemp from '../../assets/realistic/70px/3.png';

import './styles.css';

export default class cardclima extends Component {
    state = {
        name: '',
        states: '',
        data: [],
      }

      componentDidMount() {
        this.loadClima()
      }

      loadClima = async () => {
        const response = await apiClima.get('/api/v1/weather/locale/8810/current?token=3c3e45f5ec0dfc955b9ef48d8e75ce69');

        this.setState({name: response.data.name})
        this.setState({states: response.data.state})
        this.setState({data: response.data.data})
        console.log(response.data);
      };


  render() {

    return (
        <div className="card-clima">
            <div className="container">
               <div className="card-header">
                  <h1>{this.state.name} - {this.state.states}</h1>
               </div>
               <div className="card-body">
                 <span className="condition">{this.state.data.condition}</span><br/>
                 <span className="date">{this.state.data.date}</span><br/>
               </div>
               <div className="image">
                <img src={imgTemp} alt="Imagem"/>
                <span>humidade: {this.state.data.humidity}%</span>
                <span>Pressão: {this.state.data.pressure}</span>
               </div>
               <div className="temp">
                  <span className="temperature">{this.state.data.temperature}ºC</span>
                  <span className="sensation">{this.state.data.sensation}ºC </span>
               </div>
               <div className="vento">
                <FontAwesomeIcon icon={faWind} size="4x"/>
                <span>  {this.state.data.wind_direction}</span>
                <span>  {this.state.data.wind_velocity}km/h</span>
                <a href="#clima">ver <FontAwesomeIcon icon={faPlus} size="lg"/></a>
               </div>
            </div>
        </div>
    );
  }
}
