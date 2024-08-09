import React from 'react';
import './Futsal.css';
import FaseGrupo from './FaseGrupo';

function Futsal() {
  return (
    <div className="App">
      <h1>Torneio de Futsal</h1>
      <FaseGrupo/>
      {/* Fase de Grupos */}
      <div className="fase-de-grupos">
        <h2>Fase de Grupos</h2>
        <table>
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Time</th>
              <th>Placar</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='td1'>A</td>
              <td className='td1'>Time A</td>
              <td className='td1'>2 - 1</td>
              <td className='td1'>Time B</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Time C</td>
              <td>0 - 0</td>
              <td>Time D</td>
            </tr>
            {/* Adicione mais jogos conforme necessário */}
          </tbody>
        </table>
      </div>

      {/* Semifinais */}
      <div className="semifinais">
        <h2>Semifinais</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Placar</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='td1'>Time A</td>
              <td className='td1'>1 - 1 (3-4 pênaltis)</td>
              <td className='td1'>Time C</td>
            </tr>
            <tr>
              <td>Time B</td>
              <td>2 - 0</td>
              <td>Time D</td>
            </tr>
            {/* Adicione mais jogos conforme necessário */}
          </tbody>
        </table>
      </div>

      {/* Finais */}
      <div className="finais">
        <h2>Finais</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Placar</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='td1'>Time C</td>
              <td className='td1'>1 - 2</td>
              <td className='td1'>Time B</td>
            </tr>
            {/* Adicione mais jogos conforme necessário */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Futsal;