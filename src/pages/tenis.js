import React from 'react';
import './Futsal.css';
import Logo from '../assets/logo2.png';
import Banner from '../assets/fundotenis.webp';
import Reparticao from '../assets/reparticao.png'
import Footer from './Footer';

function Tenis() {
  return (
    <div className="App-Esporte">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
      <div id='menu'>
      <img className='banner' src={Banner}></img>
      </div>
      <h1 className='torneio'>TORNEIO DE TÊNIS DE MESA</h1>
      <h3 className='genero'>MASCULINO</h3>
      <div className="group-stage">
        <div className="group">
          <h2 className='font2'>Grupo A</h2>
          <table class="artilheiros-tabela">
            <thead>
              <tr>
                <th>Time</th>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >Time A1</td>
                <td >3</td>
                <td >2</td>
                <td >1</td>
                <td >0</td>
                <td >7</td>
              </tr>
              <tr>
                <td>Time A2</td>
                <td>3</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>4</td>
              </tr>
              <tr>
                <td >Time A3</td>
                <td >3</td>
                <td >1</td>
                <td >0</td>
                <td >2</td>
                <td >3</td>
              </tr>
              <tr>
                <td>Time A4</td>
                <td>3</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="group">
          <h2 className='font2'>Grupo B</h2>
          <table class="artilheiros-tabela">
            <thead>
              <tr>
                <th>Time</th>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time B1</td>
                <td >3</td>
                <td>3</td>
                <td>0</td>
                <td>0</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Time B2</td>
                <td>3</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Time B3</td>
                <td>3</td>
                <td>1</td>
                <td>0</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Time B4</td>
                <td>3</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Adicione mais grupos conforme necessário */}
      </div>
      {/* Fase de Grupos */}
      <div className="fase-de-grupos">
        <h2 className='font2'>Fase de Grupos</h2>
        <table class="artilheiros-tabela">
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
              <td>A</td>
              <td>Time A</td>
              <td>2 - 1</td>
              <td>Time B</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Time C</td>
              <td>0 - 0</td>
              <td>Time D</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Time A</td>
              <td>2 - 1</td>
              <td>Time B</td>
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
        <h2 className='font2'>Semifinais</h2>
        <table class="artilheiros-tabela">
          <thead>
            <tr>
              <th>Time</th>
              <th>Placar</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Time A</td>
              <td >2 - 1</td>
              <td >Time C</td>
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
        <h2 className='font2'>Finais</h2>
        <table class="artilheiros-tabela">
          <thead>
            <tr>
              <th>Time</th>
              <th>Placar</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time C</td>
              <td>1 - 2</td>
              <td>Time B</td>
            </tr>
            {/* Adicione mais jogos conforme necessário */}
          </tbody>
        </table>
      </div>
      <div id='reparticao'>
        <img src={Reparticao}/>
      </div>
      <div id='menu'>
        <br></br>
        <br></br>
      <h3 className='genero'>FEMININO</h3>
      <div className="group-stage">
        <div className="group">
          <h2 className='font2'>Grupo A</h2>
          <table class="artilheiros-tabela">
            <thead>
              <tr>
                <th>Time</th>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >Time A1</td>
                <td >3</td>
                <td >2</td>
                <td >1</td>
                <td >0</td>
                <td >7</td>
              </tr>
              <tr>
                <td>Time A2</td>
                <td>3</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>4</td>
              </tr>
              <tr>
                <td >Time A3</td>
                <td >3</td>
                <td >1</td>
                <td >0</td>
                <td >2</td>
                <td >3</td>
              </tr>
              <tr>
                <td>Time A4</td>
                <td>3</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="group">
          <h2 className='font2'>Grupo B</h2>
          <table class="artilheiros-tabela">
            <thead>
              <tr>
                <th>Time</th>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time B1</td>
                <td >3</td>
                <td>3</td>
                <td>0</td>
                <td>0</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Time B2</td>
                <td>3</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Time B3</td>
                <td>3</td>
                <td>1</td>
                <td>0</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Time B4</td>
                <td>3</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Adicione mais grupos conforme necessário */}
      </div>
      {/* Fase de Grupos */}
      <div className="fase-de-grupos">
        <h2 className='font2'>Fase de Grupos</h2>
        <table class="artilheiros-tabela">
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
              <td>A</td>
              <td>Time A</td>
              <td>2 - 1</td>
              <td>Time B</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Time C</td>
              <td>0 - 0</td>
              <td>Time D</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Time A</td>
              <td>2 - 1</td>
              <td>Time B</td>
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
        <h2 className='font2'>Semifinais</h2>
        <table class="artilheiros-tabela">
          <thead>
            <tr>
              <th>Time</th>
              <th>Placar</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time A</td>
              <td>2 - 1</td>
              <td>Time C</td>
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
        <h2 className='font2'>Finais</h2>
        <table class="artilheiros-tabela">
          <thead>
            <tr>
              <th>Time</th>
              <th>Placar</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time C</td>
              <td>1 - 2</td>
              <td>Time B</td>
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

export default Tenis;