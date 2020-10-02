import React, { useState } from 'react';
import {
    Button,
    Card,
    Col,
    Container,
    Row
} from 'react-bootstrap';
import passeiosJson from'../json/passeios.json'
import {Link} from 'react-router-dom'
import '../styles/Inicio.css'

function ListaPasseios() {

    const [lista] = useState(passeiosJson)

    return (
        <Container >
            <Row className = 'd-flex justify-content-center'>
                <h1>Escolha seu passeio:</h1>
            </Row>
            <Row className = 'd-flex justify-content-center'>
                {lista.passeios.map(p => (
           <div key={p.id}>
               <Col xs={6} md={4} sm={2}  key={p.id}>
               <Card id= 'card' style={{ width:'20rem'}}>
                   <Card.Img id='imgCard'src={p.imagem} alt={p.alt}/>
                   <Card.Body id='cBody'>

                       <Card.Title>{p.titulo}</Card.Title>
                       <Col>
                           <Button variant = 'success'><Link className='botao' to= '/cadastro'>{p.preco}</Link></Button>
                       </Col>
                       <Col>
                           <Button id ='cardButton' variant = 'primary'><Link className='botao' to = {p.saibaMais}>Saiba Mais</Link></Button>
                       </Col>
                   </Card.Body>
               </Card>
           </Col>
       </div>
       ))
   }
            </Row>

        </Container>
   );
}
export default ListaPasseios