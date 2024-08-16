import './Footer.css'
import Logo from '../assets/logosesi.png'

function Footer() {
    return (
        <div id='footer'>
            <div id='texto'>
                <p>Edifício SESI 317<br />Sebastião Morgatto, 90<br />CEP: 14887-388</p>
                <p>TELEFONE: 3204-3060</p>
                <p>FALE CONOSCO<br /><br />
                    TRABALHE CONOSCO</p>
                <p>IMPRENSA<br /><br />
                    OUVIDORA</p>
            </div>
            <div id='texto2'>
                <p>Institucional <br /><br /> Perguntas Frequentes</p>
                <p>Licitações <br /><br /> Consulta ao Acervo</p>
                <p>Editais <br /><br /> Editora</p>
                <p>Política de Privacidade <br /><br /> A LGPD no SESI-SP</p>
            </div>
            <div id='copyright'>
                <p>Copyright 2024 © Todos os direitos reservados. - CNO</p>
            </div>
            <div id='img'>
                <img src={Logo}></img>
            </div>
        </div>
    )
}
export default Footer;