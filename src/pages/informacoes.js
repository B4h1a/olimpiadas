import React from 'react';
import './informacoes.css';
import Logo from '../assets/logo2.png';
import Footer from './Footer';
import victor from '../assets/victor.png';
import vinicius from '../assets/vinicius.png';
import jao from '../assets/jao.png';
import pedro from '../assets/pedro.png';
import lais from '../assets/lais.png';
import nicoli from '../assets/nicoli.png';
import stevan from '../assets/stevan.png';
import gabriela from '../assets/gabriela.png';

function Informacoes() {
    return (
        <div className='App-container'>
            <div className='App-info'>
                <div className='traco'></div>
                <br />
                <img style={{ width: '100% 100%' }} src={Logo} alt="Logo" />
                <div className='linha'></div>
                <p className='grosso'>
                    Bem-vindo ao SESI Interclasse! Somos uma comunidade apaixonada por competições saudáveis e diversão entre amigos, onde estudantes de diferentes classes se reúnem para mostrar suas habilidades e espírito de equipe.
                </p>
                <p className='escrito-normal'>
                    Nosso objetivo é promover a integração e a camaradagem entre os alunos através de competições emocionantes e desafiadoras. Acreditamos que o esporte e os jogos são formas poderosas de construir laços, desenvolver habilidades e criar memórias inesquecíveis.
                </p>
                <div className='container-vermelho'>
                    <h1 className='titulozin'>Nossa Missão e Visão</h1>
                    <p className='dps-titulo'>
                        Comentar o espírito de equipe, a competitividade saudável e o respeito mútuo entre os participantes. Queremos que cada interclasse seja uma experiência única e inesquecível para todos os envolvidos.
                        E temos como visão, ser reconhecidos como o principal evento interclasse da região, onde a diversão, o respeito e a amizade andam de mãos dadas com a competição.
                    </p>
                    <h1 className='titulozin'>Nossos Valores</h1>
                    <p className='dps-titulo'>
                        Esporte e Diversão: Competir com entusiasmo e alegria, sempre valorizando o espírito esportivo.<br />
                        Inclusão: Garantir que todos os alunos, independentemente de suas habilidades, tenham a oportunidade de participar e brilhar.<br />
                        Respeito: Tratar todos os participantes, organizadores e espectadores com consideração e dignidade.<br />
                        Crescimento Pessoal: Encorajar o desenvolvimento de habilidades sociais e emocionais através da competição.
                    </p>
                </div>
                <h1 className='negrito'>Estamos aqui para proporcionar uma experiência única que vai além do jogo,<br></br> 
                unindo estudantes e criando memórias que durarão para sempre.<br></br>
                Participe e seja parte dessa incrível jornada!</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{color:'red'}}>Equipe Multimídia</h1>
                <br></br>
                <div className='fotos'>
                    <nav style={{textAlign:'center', fontSize:30}}>
                    <img src={gabriela}></img>
                    <p>Gabriella Chioda</p>
                    </nav>
                    <nav style={{textAlign:'center', fontSize:30}}>
                    <img src={stevan}></img>
                    <p>Stevan Maxwell</p>
                    </nav>
                    <nav style={{textAlign:'center', fontSize:30}}>
                    <img src={nicoli}></img>
                    <p>Nicoli Savan</p>
                    </nav>
                    <nav style={{textAlign:'center', fontSize:30}}>
                    <img src={lais}></img>
                    <p>Laís Stefani</p>
                    </nav>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{color:'red'}}>Equipe Desenvolvimento de Sistemas</h1>
                <br></br>
                <div className='fotos'>
                <nav style={{textAlign:'center', fontSize:30}}>
                <img src={victor}></img>
                <p>Victor Bahia</p>
                </nav>
                <nav style={{textAlign:'center', fontSize:30}}>
                <img src={jao}></img>
                <p>João Aylton</p>
                </nav>
                <nav style={{textAlign:'center', fontSize:30}}>
                <img src={vinicius}></img>
                <p>Vinícius Thomaz</p>
                </nav>
                <nav style={{textAlign:'center', fontSize:30}}>
                <img src={pedro}></img>
                <p>Pedro Levati</p>
                </nav>
                </div>

                <br></br>
                <br></br>
                <h2>É no presente que o SESI constrói o futuro da educação e do trabalho</h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <Footer/> 
            </div>
            
        </div>
    );
}

export default Informacoes;
