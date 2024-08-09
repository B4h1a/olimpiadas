import React from 'react';
import Carousel from './Carousel';
import FaseGrupo from './FaseGrupo';
import './Home.css';
import Ouro from '../assets/gold-medal.png';
import Prata from '../assets/silver-medal.png';
import Bronze from '../assets/bronze-medal.png';
import Pais1 from '../assets/alemanha.png';
import Pais2 from '../assets/angola.png';
import Pais3 from '../assets/brasil.png';
import Pais4 from '../assets/inglaterra.png';
import Pais5 from '../assets/italia.png';
import Pais6 from '../assets/belgica.png';
import Pais7 from '../assets/canada.png';
import Pais8 from '../assets/mapa.png';
import Fut from '../assets/fut.png';
import Voley from '../assets/voley.png';
import Basquete from '../assets/basquete.png';
import Queimada from '../assets/queimada.png';
import Corrida from '../assets/corrida.png';
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Carousel/>
      <div>
        <h1 className='texto'>Jogos de Interclasse</h1>
        <p className='texto2'>
          O Interclasse é uma competição esportiva tradicional que reúne estudantes de diferentes classes ou turmas de uma mesma escola. O objetivo principal é promover a integração e o espírito de equipe entre os alunos, além de incentivar a prática de atividades físicas. As competições geralmente incluem uma variedade de esportes, como futebol, basquete e vôlei, e podem ser organizadas em diferentes categorias, como masculino e feminino. Cada classe ou turma forma uma equipe para competir em várias modalidades, acumulando pontos com base no desempenho em cada esporte. O Interclasse não só valoriza a competição saudável, mas também promove o fair play e a colaboração entre os alunos. A competição culmina com uma cerimônia de premiação, onde são reconhecidos os melhores times e atletas. Além de desenvolver habilidades esportivas, o Interclasse fortalece o sentimento de comunidade e pertencimento entre os estudantes.
        </p>
      </div>
      <div className='data'>
        {/* Aqui você pode colocar as datas ou outros conteúdos */}
        <h1>DATAS DOS JOGOS</h1>
        <img id='fut' src={Fut}></img>
        <img id='voley' src={Voley}></img>
        <img id='basquete' src={Basquete}></img>
        <img id='queimada' src={Queimada}></img>
        <img id='corrida' src={Corrida}></img>
        <p id='futsal'>Futsal</p>
        <p id='futsal2'>01/01/2001<br/>As 8 Horas</p>
        <p id='futsal'>Queimada</p>
        <p id='futsal2'>01/01/2001<br/>As 8 Horas</p>
        <p id='futsal'>Volei</p>
        <p id='futsal2'>01/01/2001<br/>As 8 Horas</p>
        <p id='futsal'>Basquete</p>
        <p id='futsal2'>01/01/2001<br/>As 8 Horas</p>
        <p id='futsal'>Futmesa</p>
        <p id='futsal2'>01/01/2001<br/>As 8 Horas</p>
        <p id='futsal'> Handebol</p>
        <p id='futsal2'>01/01/2001<br/>As 8 Horas</p>
        <p id='futsal'>Tênis de Mesa</p>
        <p id='futsal2'>01/01/2001<br/>As 8 Horas</p>
        <p id='futsal'>Atletismo</p>
        <p id='futsal2'>01/01/2001<br/>As 8 Horas</p>
        
      </div>
      <div className='tabela-home'>
      <table className="grupo5">
            <thead>
              <tr>
                <th className='bordinha'>Sala</th>
                <th><img width='60px' src={Ouro}/></th>
                <th><img width='60px' src={Prata}/></th>
                <th><img width='60px' src={Bronze}/></th>
                <th className='bordinha2'>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='td5'><img width='25px' src={Pais2}/></td>
                <td className='td5'>3</td>
                <td className='td5'>2</td>
                <td className='td5'>1</td>
                <td className='td5'>0</td>
              </tr>
              <tr>
                <td><img width='25px' src={Pais8}/></td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td className='td5'><img width='25px' src={Pais1}/></td>
                <td className='td5'>3</td>
                <td className='td5'>2</td>
                <td className='td5'>1</td>
                <td className='td5'>0</td>
              </tr>
              <tr>
                <td><img width='25px' src={Pais4}/></td>
                <td>3</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td className='td5'><img width='25px' src={Pais5}/></td>
                <td className='td5'>3</td>
                <td className='td5'>2</td>
                <td className='td5'>1</td>
                <td className='td5'>0</td>
              </tr>
              <tr>
                <td><img width='25px' src={Pais7}/></td>
                <td>3</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td className='td5'><img width='25px' src={Pais3}/></td>
                <td className='td5'>3</td>
                <td className='td5'>2</td>
                <td className='td5'>1</td>
                <td className='td5'>0</td>
              </tr>
              <tr>
                <td><img width='25px' src={Pais6}/></td>
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
  );
}

export default Home;
