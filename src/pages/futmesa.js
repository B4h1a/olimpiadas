import React from 'react';
import './Futsal.css';
import FaseGrupo from './FaseGrupo';
import Logo from '../assets/logo2.png';
import Banner from '../assets/futsal.jpg';
import Reparticao from '../assets/reparticao.png'
import Footer from './Footer';

function Futmesa() {
  return (
    <div className="App">
      <div id='menu'>
      <img className='banner' src={Banner}></img>
      <h1>TORNEIO DE FUTMESA</h1>
      </div>
      <img src={Logo}></img>
      <h2>TABELA DA FASE DE GRUPOS</h2>
      <h3 style={{color:"red", padding:15, fontSize:30}}>MASCULINO</h3>
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
              <td className='td1'>2 - 1</td>
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
      <div id='reparticao'>
        <img src={Reparticao}/>
      </div>
      <div id='menu'>
      <h3 style={{color:"red", padding:15, fontSize:30}}>FEMININO</h3>
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
              <td className='td1'>2 - 1</td>
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
      <Footer/>
    </div>
    </div>
  );
  }

export default Futmesa;