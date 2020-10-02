import React, { useState } from 'react';
import {
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
  Form,
  Button,
  NavbarBrand
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container fluid>
      <Row>
        <Navbar id='Navbar' expand='md' fixed='top'>

            <NavbarBrand>
                <Dropdown>
                    <Dropdown.Toggle variant='success' id='botao_login'>
                      <FontAwesomeIcon icon={faUserAlt } />
                    </Dropdown.Toggle>

                    <Dropdown.Menu id='campos'>
                        <Form> 
                            <Form.Group controlId='formHorizontalEmail' >
                                <Form.Label column md={3}>Email:</Form.Label>
                                <Col md={8}>
                                    <Form.Control className= 'focusPainel' type='email' placeholder='user@gmail.com' />
                                </Col>
                            </Form.Group>

                            <Form.Group controlId='formHorizontalPassword'>
                              <Form.Label column md={3}>Senha:</Form.Label>
                              <Col md={8}>
                                  <Form.Control className= 'focusPainel' type='password' placeholder='Senha' />
                              </Col>
                            </Form.Group>

                            <Form.Group>
                              <Col md= {8}>
                                <Button className = 'botAoEnviar' id = 'botaoEnviar' type='submit'>Login</Button>
                              </Col>
                              </Form.Group>

                          </Form>
                      </Dropdown.Menu>
                  </Dropdown>
              </NavbarBrand>

          <Navbar.Toggle onClick={toggle} className='justify-content-end'/>
            <Navbar.Collapse>
                <Container fluid className = 'd-flex justify-content-center'>
                    <Nav as='ul'>
                      <Nav.Item className='itemNav' as='li'>
                         <Nav.Link id='inicioNav' href= '/'>Início</Nav.Link>  
                      </Nav.Item>                       
                      <Nav.Item className='itemNav' as='li'>
                          <Nav.Link id='quemSomosNav' href= '/quemsomos'>Quem somos</Nav.Link>  
                      </Nav.Item>
                      <Nav.Item className='itemNav' as='li'>
                          <Nav.Link id='hospedagemNav' href= '/#hospedagem'>Hospedagem</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className='itemNav' as='li'>
                          <Nav.Link id='contatosNav' href= '#footer'>Contatos</Nav.Link> 
                      </Nav.Item>
                    </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </Row>
      <Row id='RowTitulo'> 
        <img src='imagens/teresopolis_adventure.png' alt = 'imagem com o nome do site Teresópolis adventure e a logo do site que simboliza uma pessoa escalando uma montanha' width='100%'/>
      </Row>
    </Container>
  );
}

export default Header;