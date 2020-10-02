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

function Cachoeira(){
    return(
        <Container >
            <Row className ='d-flex justify-content-center'>
                <h1 id='tituloCachoeira'>Cachoeira da Macumba</h1>
            </Row>
            <Row className ='d-flex justify-content-center'>
            <Image id ='imagemCachoeira1' src='imagens/cachoeira/cachoeira3.png' alt='Foto cachoeira da Macumba' fluid/>
            </Row>
            <p> A cahoeira está localizada na serra no caminho entre Itaipava e Teresópolis. Após chegar ao local, a
            trilha
            até a cachoeira não leva mais do que 5/10 minutos de caminhada bem demarcada e muito tranquila.
            </p>

            <p> São duas quedas, uma com 15m e outra com 35m de altura. Elas formam dois grandes poços de água. Em ambos
                os
                poços é possível se banhar e curtir a água, mas o segundo é
                bem mais bonito e a área sem pedras para poder nadar é maior. Ambos são cheios de pedras, portanto,
                tenha
                cuidado ao se locomover!Especialmente no segundo poço, que é bem mais alto, um escorregão e uma queda
                pode
                ser fatal. Para isso, tente não caminhar muito na beirada da pedra por onde cai a água.</p>
            <p>Nível de dificuldade da trilha: Leve/ aproximadamente 5 minutos de caminhada. </p>

            <p>Queda d'água de 35 metros de altura; ótima para esportes radicais como rapel e escalada; e o lindo visual
                no
                topo da cachoeira. </p>

                <Row> 
                    <Col md={{ span: 4, offset: 8 }}> 
                        <Button id='botao'variant = 'success'><Link id= 'link' to = '/cadastro'>Embarque nessa aventura!</Link></Button>
                        <Botao/>
                    </Col>
                </Row>
        </Container>
    )
}
export default Cachoeira