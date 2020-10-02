import React from 'react'
import {
    Container,
    Row,
    Image,
    Button,
    Col
  } from 'react-bootstrap';
import '../styles/saibaMais.css'
import {Link} from 'react-router-dom'
import Botao from '../components/Botao';

function DedoDeus(){
    return(
        <Container >
            <Row className = 'd-flex justify-content-center'>
                <h1 id='tituloDedo'>Dedo de Deus</h1>
            </Row>
            
            <Image id ='imagemDedo1' src='imagens/dedo/dedo4.jpg' alt='Foto do Dedo de Deus' fluid/>

            <p>  A via Teixeira, no Dedo de Deus, foi conquistada em 1.912 e até
            hoje representa um interessante e relevante desafio, principalmente por se
            tratar de uma escalada no Dedo de Deus, localizado na Serra dos Órgãos, Rio de Janeiro.
            </p>
            <p>Não é uma escalada que exige elevado nível técnico ( 3o IIIsup A1 C ) porém, assim como todas as vias
            dessa
            montanha, possui características que fazem dela uma via exigente física e psicologicamente.</p>

            <p>A aproximação é bastante longa e possui, além de uma trilha pesada de 40 minutos, uma longa sequência de
                cabos de aço, onde você precisa ultrapassar utilizando equipamentos específicos de escalada.</p>

            <p>Após 100 metros de escalada em cabo de aço, a subida começa a alternar trechos de cabo de aço e trilha.
            </p>

            <p>A primeira e segunda enfiadas não praticamente uma trepação, seguindo por lances fáceis, com alguns
                lances em calha, fendas e finalizando em uma rampa que dá acesso a base da Maria Cebola.
            </p>

            <p>A terceira enfiada é a conhecida Variante Maria Cebola, um diedro que contorna essa face da montanha e
                segue até a primeira chaminé da via. Esse diedro é todo protegido por grampos, mas um jogo de friends
                pode
                ajudar no psicológico, principalmente na sua parte final.
            </p>
 
            <Image id ='imagemDedo2' src='imagens/dedo/dedo3.jpg' alt='Foto de pessoas escalando o Dedo de Deus' fluid/>

            <p>A quarta enfiada é dentro da grande chaminé, onde é possível ver um bloco entalado e logo acima um
            grampo.
            Seguindo mais um pouco pela chaminé é possível localizar o grampo da P4, que fica em um pequeno platô no
            lado de fora da chaminé e na beira do abismo, uma visão realmente impressionante!
            </p>

            <p>Na quinta enfiada a dica é ir até o fundo do corredor e seguir em chaminé até o topo de um bloco com um
                grampo a altura do peito, onde será preciso fazer um lance de domínio. Despois tem mais lance curto de
                chaminé e já possível ver a P5 que fica em um grande platô com uma espécie de caverna cheia de blocos de
                pedra.
            </p>

            <p>A sexta enfiada é um lance também em chaminé, mas bem curtinho, que vai dar no platô de acesso ao cume.
                Nesse
                platô existe um grampo que pode ser utilizado com parada. Para acessar o cume basta subir pela escada!
            </p>

            <p>A descida é pela Teixeira, logo é preciso descer a escada e depois seguir o caminho oposto da Face Leste,
                ou
                seja, virar para a direita para quem está olhando para a escada. No canto direito do platô é possível
                localizar os grampos da Teixeira, dai para baixo são três rapeis depois segue descendo, ora por trilha,
                ora
                por cabo de aço.
            </p>

            <p>Hoje, além de toda sua importância histórica e uma belíssima escalada, a Teixeira é também a melhor via
                para descer do topo da montanha (rapel).
            </p>

            <p> É imprescindível que você assine, na entrada do Parque Nacional da Serra dos Órgãos, o
                Termo de Conhecimento de Riscos e Normas e, ao final de sua atividade, também dê baixa neste documento.
            </p>

            <Row> 
                <Col md={{ span: 4, offset: 8 }}> 
                    <Button id='botao'variant = 'success'><Link id= 'link' to = '/cadastro'>Embarque nessa aventura!</Link></Button>
                    <Botao/>
                </Col>
            </Row>
        </Container>
    )
}
export default DedoDeus