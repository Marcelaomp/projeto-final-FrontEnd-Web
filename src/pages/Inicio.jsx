import React from 'react'
import {
    Container,
    Row
  } from 'react-bootstrap';
import Carrossel from '../components/Carrossel.jsx';
import ListaPasseios from '../components/ListaPasseios';
import '../styles/Inicio.css'

function Inicio(){
    return(
        <Container fluid>
            <Row>
                <img className='principal img-responsive center-block' src='imagens/principal.jpg' alt='Imagem panorâmica da serra dos órgãos, localizada em Teresópolis, região serrana do Rio de Janeiro' width='100%'/>
            </Row>

        <Container>  
            <div id='descricao'>
            
                <h2>Você sabia que Teresópolis é a Capital Nacional do Montanhismo?</h2>
            
                <p className='text-responsive'>
                    Teresópolis é a cidade mais alta do estado do Rio de Janeiro, a 871 metros e
                    ostenta as mais baixas
                    temperaturas entre os municípios fluminense.</p>
                <p>Para os aventureiros, a principal atração é o Parque Nacional da Serra dos Órgãos, que abriga o Pico Dedo
                    de Deus – a cidade tem a melhor estrutura para quem visita o parque e não quer gastar
                    muito com camping, albergue e guias. Os adeptos de caminhadas pela mata se esbaldam na famosa
                    travessia Petrópolis-Teresópolis,<span id='passeios' ></span> que tem 30 km, é feita normalmente em 3 dias e passa por
                    cachoeiras e piscinas naturais.</p >
            </div>
                    
            <ListaPasseios/>
            
            <Carrossel/>
        </Container>  
        </Container> 
    )
}
export default Inicio;