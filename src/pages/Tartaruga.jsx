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

function Tartaruga(){
    return(
        <Container >
            <Row className = 'd-flex justify-content-center'>
                <h1 id='tituloTartaruga'>Pedra da Tartaruga</h1>
            </Row>
            
            <Image id ='imagemTartaruga1' src='imagens/tartaruga/tartaruga3.jpg' alt='Foto Pedra da Tartaruga' fluid/>

            <p> Dentro da Serra do Mar, a pedra da Tartaruga é um ótimo local para a realização de caminhadas ecológicas e
                rapel. Com seus 1.160 metros do nivel do mar, tem um visual íncrivel para a Serra dos Órgãos, Três Picos,
                Mulher de Pedra e diversos outras elevações da região.
            </p>
 
            <Image id ='imagemTartaruga2' src='imagens/tartaruga/tartaruga4.jpg' alt='Foto rapel na Pedra da Tartaruga' fluid/>

            <p>O Parque Natural Municipal Montanhas de Teresópolis ocupa uma área de 4.397 hectares e está situado na região
                noroeste de Teresópolis, parcialmente inserido no 1º e 2º Distritos e fazendo limite com os municípios de
                Petrópolis e São José do Vale do Rio Preto. Possui duas sedes: a da Pedra da Tartaruga, com acesso pelo
                bairro Granja Florestal, na área urbana, e de Santa Rita, no 2º Distrito, zona rural do município.
            </p>

            <p>O parque possui em seu território uma exuberante cadeia de montanhas, com destaque para a Pedra da
                Tartaruga, do Camelo e de Santana e Pedra do Arrieiro. A unidade de conservação também protege muitas
                nascentes e importantes remanescentes florestais,
                que abrigam significativas espécies da fauna e flora do bioma Mata Atlântica, na região.
            </p>

            <Image id ='imagemTartaruga3' src='imagens/tartaruga/tartaruga5.jpg' alt='Foto rapel na Pedra da Tartaruga' fluid/>

            <p>Teresmo 3 pontos de rapel. Um ponto possui, aproximadamente, 6 metros de altura em rapel positivo, sendo
                ideal para quem está aprendendo. O outro ponto é um pouco maior, com 12 metros de altura de rapel positivo,
                também é bom para quem está começando a aprender e deseja treinar novas técnicas sem se expor à grandes
                alturas.
            </p>

            <p>O último ponto possui, aproximadamente, 45 metros. Sua saída é feita em um rapel positivo. Uns 6 metros
                depois, perde-se o contato contato com a rocha e o rapel torna-se negativo por cerca de 39 metros, com um
                visual incrível ao redor.
            </p>

            <p> A nova trilha do Parque municipal montanhas de Teresópolis foi inaugurada em 04/08/2020. Com 2,5km
                quilômetro de extensão (ida e volta), a nova trilha é classificada como de classe 3, com grau de
                dificuldade de fácil a moderado. Tem cerca de 113 metros de desnível e quatro pontes, a maior delas com 42m
                de extensão. Uma delas segue entre campo e floresta até um mirante, onde o visitante pode identificar o
                formato da montanha como sendo o de uma tartaruga.
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
export default Tartaruga