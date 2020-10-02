import React from 'react'
import {
    Container,
    Row,
    Image,
    Button, Col
  } from 'react-bootstrap';
import '../styles/saibaMais.css'
import {Link} from 'react-router-dom'
import Botao from '../components/Botao';

function Sino(){
    return(
        <Container >
            <Row className = 'd-flex justify-content-center'>
                <h1 id='tituloSino'>Pedra do Sino</h1>
            </Row>
            
            <Image id ='imagemSino1' src='imagens/sino/sino3.jpg' alt='Foto Pedra do sino' fluid/>

            <p> A Pedra do Sino é ponto culminante do Parque Nacional da Serra dos Órgãos, em Teresópolis, no interior do
            estado do Rio de Janeiro. É um local perfeito para os amantes da natureza, do montanhismo e dos passeios em
            trilhas naturais. A Pedra do Sino foi conquistada pelo escocês George Garner em 1841. Seu acesso começa a
            partir do último estacionamento do Parque.
            </p>

            <p>Carregue as baterias do smartphone e da câmera fotográfica/filmadora para não perder nenhum detalhe durante a
            trilha. Você verá as belezas deslumbrantes da rica vegetação da Mata Atlântica. São plantas de diversas
            famílias, como éricas, orquídeas e bromélias. Se der sorte, encontrará pequenos macacos e outros animais
            pelo caminho. Lá você vai encontrar vales e penhascos impressionantes. Tem também várias plataformas de
            observação com vistas panorâmicas incríveis de toda a região.
            </p>
 
            <Image id ='imagemSino2' src='imagens/sino/sino5.jpg' alt='Foto Pedra do sino' fluid/>

            <p>Com uma hora de caminhada, mais ou menos, você chega a uma caverna, que é chamada de primeiro abrigo. Logo em
            seguida está a cachoeira Véu da Noiva que, como o próprio nome sugere, desce branquinha junto a uma pedra
            imensa e desagua num pequeno poço transparente.
            </p>

            <p>Depois de mais ou menos duas horas e meia de caminhada, estará no chamado abrigo 3, que é um campo aberto (o
            segundo abrigo está desativado, pois ficava muito longe de qualquer fonte d’água). Ali no terceiro abrigo é
            possível acampar. Uma trilha rápida te leva até um mirante onde você verá Nova Friburgo, parte do Rio e,
            claro, Teresópolis.
            </p>

            <p>Logo acima, o abrigo quatro, que é a última parada antes de chegar ao cume da Pedra do Sino. Neste abrigo há
                uma estrutura para camping, onde também é possível pernoitar.
            </p>

            <p> DISTANCIA: 11KM; DIFICULDADE: SEMI PESADO; TEMPO ESTIMADO: 5 HORAS (IDA)</p>

            <Row> 
                <Col md={{ span: 4, offset: 8 }}> 
                    <Button id='botao'variant = 'success'><Link id= 'link' to = '/cadastro'>Embarque nessa aventura!</Link></Button>
                    <Botao/>
                </Col>
            </Row>
        </Container>
    )
}
export default Sino