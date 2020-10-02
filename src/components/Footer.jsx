import React from 'react';
import '../styles/Footer.css';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <Container fluid id='footer'>
      <Row>
          <Col md={1}>
            <Image className='logo' src='imagens/nv_logo.png' alt='Logo da Teresópolis Adventure'/>
          </Col>
          <Col md={{ span: 3, offset: 0 }}></Col> 
          <Col md={4}>
            <div className='orgao'>
              <Image src='imagens/uiaa1.png' alt='Imagem da logo do União Internacional das Associações de Alpinismo'/>
            </div>
            <span>&copy; 2020. Teresopolis Adventure</span>
          </Col>
          <Col>
            <div className='redes'>
              <a href='https://www.google.com.br/maps?q= Varzea nº211 Centro, Teresóplis - RJ' target='blank'><FontAwesomeIcon icon={faMapMarkerAlt} /></a>
              <a href='https://www.linkedin.com' target='blank' rel='noopener'> <FontAwesomeIcon icon={faLinkedin} /></a>
              <a href='https://www.instagram.com' target='blank' rel='noopener'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href='https://www.facebook.com' target='blank' rel='noopener'><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
            <ul className='contato' id='contato'>
              <li>Telefone: (21)2643-3036</li>
              <li>Email: tereadventure@gmail.com</li>
              <li>End: <a href='https://www.google.com.br/maps?q= Varzea nº211 Centro, Teresóplis - RJ' target='blank' rel='noopener'>Varzea nº211 Centro, Teresópolis - RJ</a></li>
            </ul>
          </Col>
        </Row>
      </Container> 
   )
}
export default Footer