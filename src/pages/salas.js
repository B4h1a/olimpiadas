import React from "react";
import './salas.css';  // Certifique-se de que o caminho está correto

import Alemanha from '../assets/alemanha.png';
import Angola from '../assets/angola.png';
import Brasil from '../assets/brasil.png';
import Inglaterra from '../assets/inglaterra.png';
import Italia from '../assets/italia.png';
import Belgica from '../assets/belgica.png';
import Canada from '../assets/canada.png';
import Republica from '../assets/mapa.png';
import Footer from "./Footer";

// Adicione as imagens dos artilheiros
import Artilheiro1 from '../assets/vinicius.png'; // Substitua pelo caminho correto da imagem
import Artilheiro2 from '../assets/victor.png'; // Substitua pelo caminho correto da imagem

const Salas = () => (
    <div className="App-Esporte">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
        <h1 className="font">JOGOS INTERCLASSE</h1>
        <div id="subtitulo">EQUIPES</div>
        <div className="times">
            <div className="time">
                <img src={Brasil} alt="Brasil" />
                <p>9ºA</p>
            </div>
            <div className="time">
                <img src={Belgica} alt="Bélgica" />
                <p>9ºB</p>
            </div>
            <div className="time">
                <img src={Italia} alt="Itália" />
                <p>1ºB</p>
            </div>
            <div className="time">
                <img src={Canada} alt="Canadá" />
                <p>1ºB</p>
            </div>
            <div className="time">
                <img src={Inglaterra} alt="Inglaterra" />
                <p>2ºA</p>
            </div>
            <div className="time">
                <img src={Alemanha} alt="Alemanha" />
                <p>2ºB</p>
            </div>
            <div className="time">
                <img src={Angola} alt="Angola" />
                <p>3ºA</p>
            </div>
            <div className="time">
                <img src={Republica} alt="República" />
                <p>3ºB</p>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="artilheiros-section">
            <div className="artilheiros-tabela-container">
                <h1 className="font-artilheiro">ARTILHEIROS</h1>
                <table className="artilheiros-tabelas">
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Nome do Atleta</th>
                            <th>Time</th>
                            <th>Gols</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>João</td>
                            <td>100m</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maria</td>
                            <td>200m</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Pedro</td>
                            <td>400m</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Matheus</td>
                            <td>500m</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Caue</td>
                            <td>600m</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="artilheiros-destaques">
                <h1 className="font-artilheiro">Destaques</h1>
                <div className="artilheiros-images">
                    <div className="artilheiro">
                        <img src={Artilheiro1} alt="Artilheiro 1" />
                        <p>Vinicius - 1º Lugar</p>
                    </div>
                    <div className="artilheiro">
                        <img src={Artilheiro2} alt="Artilheiro 2" />
                        <p> Victor - 2º Lugar</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default Salas;
