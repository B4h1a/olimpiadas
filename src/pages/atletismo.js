import React from 'react';
import './Futsal.css';
import Logo from '../assets/logo2.png';
import Banner from '../assets/fundoatletismo.jpg';
import Reparticao from '../assets/reparticao.png'
import Footer from './Footer';


function Atletismo() {
    return (
        <div className="App-Esporte">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
            <div id='menu'>
                <img className='banner' src={Banner}></img>
            </div>
            <h1 className='torneio'>TORNEIO DE ATLETISMO</h1>
            <h3 className='genero'>MASCULINO</h3>
            {/* Fase de Grupos */}
            <div class="artilheiros-tabelas">
                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Nome do Atleta</th>
                            <th>Distância</th>
                            <th>Tempo</th>
                            <th>Pontuação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>João </td>
                            <td>100m</td>
                            <td>10.15</td>
                            <td>9.8</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maria </td>
                            <td>100m</td>
                            <td>22.30</td>
                            <td>9.5</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Pedro </td>
                            <td>100m</td>
                            <td>48.75</td>
                            <td>9.3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Matheus </td>
                            <td>100m</td>
                            <td>58.75</td>
                            <td>8.3</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Caue </td>
                            <td>100m</td>
                            <td>68.75</td>
                            <td>7.3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='reparticao'>
                <img src={Reparticao} />
            </div>
            <div id='menu'>
                <br></br>
                <br></br>
                <h3 className='genero'>FEMININO</h3>

                <div class="artilheiros-tabela">
                    <table>
                        <thead>
                            <tr>
                                <th>Posição</th>
                                <th>Nome do Atleta</th>
                                <th>Evento</th>
                                <th>Tempo</th>
                                <th>Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Julia</td>
                                <td>100m</td>
                                <td>10.15</td>
                                <td>9.8</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Anna</td>
                                <td>200m</td>
                                <td>22.30</td>
                                <td>9.5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Raquel</td>
                                <td>400m</td>
                                <td>48.75</td>
                                <td>9.3</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Flavia</td>
                                <td>500m</td>
                                <td>58.75</td>
                                <td>8.3</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Maria</td>
                                <td>600m</td>
                                <td>68.75</td>
                                <td>7.3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Atletismo;