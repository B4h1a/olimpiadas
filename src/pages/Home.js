import React from 'react';
import Carousel from './Carousel';
import FaseGrupo from './FaseGrupo';
import './Home.css';
import Ouro from '../assets/gold-medal.png';
import Prata from '../assets/silver-medal.png';
import Bronze from '../assets/bronze-medal.png';
import Alemanha from '../assets/alemanha.png';
import Angola from '../assets/angola.png';
import Brasil from '../assets/brasil.png';
import Inglaterra from '../assets/inglaterra.png';
import Italia from '../assets/italia.png';
import Belgica from '../assets/belgica.png';
import Canada from '../assets/canada.png';
import Republica from '../assets/mapa.png';
import Futsal from '../assets/futebol.png';
import Volei from '../assets/volei.png';
import Basquete from '../assets/basquete.png';
import Queimada from '../assets/queimada.png';
import Atletismo from '../assets/atletismo.png';
import Handebol from '../assets/handebol.png';
import Tenis from '../assets/tenis-de-mesa.png';
import Futmesa from '../assets/futmesa.png';
import Footer from './Footer';


function Home() {
  return (
    <div className='app-home'>
      <Carousel />
      <div className="container">
      <div className='cinza'>
        <h1 className='texto'>Jogos de Interclasse</h1>
        <p className='texto2'>
          O Interclasse é uma competição esportiva tradicional que reúne estudantes de diferentes classes ou turmas de uma mesma escola. O objetivo principal é promover a integração e o espírito de equipe entre os alunos, além de incentivar a prática de atividades físicas. As competições geralmente incluem uma variedade de esportes, como futebol, basquete e vôlei, e podem ser organizadas em diferentes categorias, como masculino e feminino. Cada classe ou turma forma uma equipe para competir em várias modalidades, acumulando pontos com base no desempenho em cada esporte. O Interclasse não só valoriza a competição saudável, mas também promove o fair play e a colaboração entre os alunos. A competição culmina com uma cerimônia de premiação, onde são reconhecidos os melhores times e atletas. Além de desenvolver habilidades esportivas, o Interclasse fortalece o sentimento de comunidade e pertencimento entre os estudantes.
        </p>
      </div>
      <div className='data'>
        <h1>DATAS DOS JOGOS</h1>
        <p id='futsal'><img src={Brasil}/>Futsal<img src={Alemanha}/></p>
        <p id='futsal2'>01/01/2001<br />As 8 Horas</p>
        <br/>
        <br/>
        <p id='futsal'><img src={Angola}/>Queimada<img src={Republica}/></p>
        <p id='futsal2'>01/01/2001<br />As 8 Horas</p>
        <br/>
        <br/>
        <p id='futsal'><img src={Inglaterra}/>Volei<img src={Italia}/></p>
        <p id='futsal2'>01/01/2001<br />As 8 Horas</p>
        <br/>
        <br/>
        <p id='futsal'><img src={Belgica}/>Basquete<img src={Canada}/></p>
        <p id='futsal2'>01/01/2001<br />As 8 Horas</p>
        <br/>
        <br/>
        <p id='futsal'><img src={Brasil}/>Futmesa<img src={Alemanha}/></p>
        <p id='futsal2'>01/01/2001<br />As 8 Horas</p>
        <br/>
        <br/>
        <p id='futsal'><img src={Angola}/>Handebol<img src={Republica}/></p>
        <p id='futsal2'>01/01/2001<br />As 8 Horas</p>
        <br/>
        <br/>
        <p id='futsal'><img src={Inglaterra}/>Tênis de Mesa<img src={Italia}/></p>
        <p id='futsal2'>01/01/2001<br />As 8 Horas</p>
        <br/>
        <br/>
        <p id='futsal'><img src={Belgica}/>Atletismo<img src={Canada}/></p>
        <p id='futsal2'>01/01/2001<br />As 8 Horas</p>
        <br/>
        <br/>
      </div>
      <div className='salas'>
          <div className='salas2'>9º<div id='salas3'>ANO</div></div>
          <div className='salas2'>1º<div id='salas3'>ANO</div></div>
          <div className='salas2'>2º<div id='salas3'>ANO</div></div>
          <div className='salas2'>3º<div id='salas3'>ANO</div></div>
      </div>
      <div className='tabela-home'>
        <table className="grupo5">
          <thead>
            <tr>
              <th className='bordinha'>Sala</th>
              <th><img width='60px' src={Ouro} alt="Medalha de Ouro" /></th>
              <th><img width='60px' src={Prata} alt="Medalha de Prata" /></th>
              <th><img width='60px' src={Bronze} alt="Medalha de Bronze" /></th>
              <th className='bordinha2'>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='td5'><img width='25px' src={Angola} alt="Angola" /></td>
              <td className='td5'>3</td>
              <td className='td5'>2</td>
              <td className='td5'>1</td>
              <td className='td5'>0</td>
            </tr>
            <tr>
              <td><img width='25px' src={Republica} alt="Republica" /></td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <td className='td5'><img width='25px' src={Alemanha} alt="Alemanha" /></td>
              <td className='td5'>3</td>
              <td className='td5'>2</td>
              <td className='td5'>1</td>
              <td className='td5'>0</td>
            </tr>
            <tr>
              <td><img width='25px' src={Inglaterra} alt="Inglaterra" /></td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td className='td5'><img width='25px' src={Italia} alt="Italia" /></td>
              <td className='td5'>3</td>
              <td className='td5'>2</td>
              <td className='td5'>1</td>
              <td className='td5'>0</td>
            </tr>
            <tr>
              <td><img width='25px' src={Canada} alt="Canada" /></td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td className='td5'><img width='25px' src={Brasil} alt="Brasil" /></td>
              <td className='td5'>3</td>
              <td className='td5'>2</td>
              <td className='td5'>1</td>
              <td className='td5'>0</td>
            </tr>
            <tr>
              <td><img width='25px' src={Belgica} alt="Belgica" /></td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/> 
      </div>
    </div>
  );
}

export default Home;
