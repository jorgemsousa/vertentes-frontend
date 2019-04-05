import React, { Component } from 'react';
import apiClima from '../../services/apiClima';
//import './styles.css';

export default class tableClima extends Component {
    state = {
        namesp: '',
        statesp: '',
        datasp: [],
        namerj: '', /* id 5959 */
        staterj: '',
        datarj: [],
        namebh: '', /* id 6879 */
        statebh: '',
        databh: [],
        nameba: '',  /* id 7564 */
        stateba: '',
        databa: [],
        nameam: '',  /* id 7544 */
        stateam: '',
        dataam: [],
    }


    componentDidMount() {
        this.loadClimasp()
        this.loadClimaam()
        this.loadClimaba()
        this.loadClimabh()
        this.loadClimarj()
      }

      loadClimasp = async () => {
        
        const response = await apiClima.get('/api/v1/weather/locale/3477/current?token=3c3e45f5ec0dfc955b9ef48d8e75ce69');

        this.setState({namesp: response.data.name})
        this.setState({statesp: response.data.state})
        this.setState({datasp: response.data.data})
      };

      loadClimarj = async () => {
        
        const response = await apiClima.get('/api/v1/weather/locale/5959/current?token=3c3e45f5ec0dfc955b9ef48d8e75ce69');
             
        this.setState({namerj: response.data.name})
        this.setState({staterj: response.data.state})
        this.setState({datarj: response.data.data})
      };
        
      loadClimabh = async () => {
        
        const response = await apiClima.get('/api/v1/weather/locale/6879/current?token=3c3e45f5ec0dfc955b9ef48d8e75ce69');
             
        this.setState({namebh: response.data.name})
        this.setState({statebh: response.data.state})
        this.setState({databh: response.data.data})
      };

      loadClimaba = async () => {
        
        const response = await apiClima.get('/api/v1/weather/locale/7564/current?token=3c3e45f5ec0dfc955b9ef48d8e75ce69');
             
        this.setState({nameba: response.data.name})
        this.setState({stateba: response.data.state})
        this.setState({databa: response.data.data})
      };

      loadClimaam = async () => {
        
        const response = await apiClima.get('/api/v1/weather/locale/7544/current?token=3c3e45f5ec0dfc955b9ef48d8e75ce69');
             
        this.setState({nameam: response.data.name})
        this.setState({stateam: response.data.state})
        this.setState({dataam: response.data.data})
      };


  render() {
    return (

      <div className="card text-white bg-info m-1">
              <div className="card-header text-center"><h3>Previsão das Principais Cidades</h3></div>
              <div className="card-body">
              <table className="table table-striped table-sm text-white text-center">
                <thead>
                  <tr>
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Data</th>
                    <th scope="col">Temperatura</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>{this.state.namesp}</td>
                      <td>{this.state.statesp}</td>
                      <td>{this.state.datasp.date}</td>
                      <td>{this.state.datasp.temperature}º</td>
                  </tr>
                  <tr>
                      <td>{this.state.namerj}</td>
                      <td>{this.state.staterj}</td>
                      <td>{this.state.datarj.date}</td>
                      <td>{this.state.datarj.temperature}º</td>
                  </tr>
                  <tr>
                      <td>{this.state.namebh}</td>
                      <td>{this.state.statebh}</td>
                      <td>{this.state.databh.date}</td>
                      <td>{this.state.databh.temperature}º</td>
                  </tr>
                  <tr>
                      <td>{this.state.nameba}</td>
                      <td>{this.state.stateba}</td>
                      <td>{this.state.databa.date}</td>
                      <td>{this.state.databa.temperature}º</td>
                  </tr>
                  <tr>
                      <td>{this.state.nameam}</td>
                      <td>{this.state.stateam}</td>
                      <td>{this.state.dataam.date}</td>
                      <td>{this.state.dataam.temperature}º</td>
                  </tr>
                </tbody>
              </table>

              </div>
            </div>        

    );  
  }
}
