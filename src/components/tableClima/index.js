import React, { Component } from 'react';

import './styles.css';

export default class tableClima extends Component {
  render() {
    return (
        <div className="tableClima">
           <table>
               <tr className="titulo">
                 <th colSpan="5">Previsão das Principais Cidades</th>
               </tr>
               <tr className="cabecalho">
                   <th>Cidade</th>
                   <th>Estado</th>
                   <th>Data</th>
                   <th>Máxima</th>
                   <th>Minima</th>
               </tr>
               <tr className="corpo">
                   <td>São Paulo</td>
                   <td>SP</td>
                   <td>09/03/2019</td>
                   <td>24º</td>
                   <td>18º</td>
               </tr>
               <tr className="corpo">
                   <td>São Paulo</td>
                   <td>SP</td>
                   <td>09/03/2019</td>
                   <td>24º</td>
                   <td>18º</td>
               </tr>
               <tr className="corpo">
                   <td>São Paulo</td>
                   <td>SP</td>
                   <td>09/03/2019</td>
                   <td>24º</td>
                   <td>18º</td>
               </tr>
               <tr className="corpo">
                   <td>São Paulo</td>
                   <td>SP</td>
                   <td>09/03/2019</td>
                   <td>24º</td>
                   <td>18º</td>
               </tr>
               <tr className="corpo">
                   <td>São Paulo</td>
                   <td>SP</td>
                   <td>09/03/2019</td>
                   <td>24º</td>
                   <td>18º</td>
               </tr>
               
           </table>
        </div>
    );
  }
}
