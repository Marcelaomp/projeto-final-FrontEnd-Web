import React from 'react';
import '../styles/floatbutton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import {
    Dropdown,
    Form,
    Button
  } from 'react-bootstrap';

function FloatButton(){

    return(
       
        <div className='fab'>
            <Dropdown className='main' drop = {'up'}>
                <Dropdown.Toggle type='button' variant='success' id='faleConosco'>
                    <FontAwesomeIcon className='icone' icon={faCommentDots} size='2x' />
                </Dropdown.Toggle>
            
                <Dropdown.Menu id='camposFaleConosco'>
                    <Dropdown.ItemText id='faleConoscoTitle'><h5>Fale Conosco!</h5></Dropdown.ItemText>
                        <Form> 

                            <Form.Group controlId='formHorizontalName'>
                              <Form.Label ClassName='labelFaleConosco' >Nome:</Form.Label>
                                  <Form.Control className= 'focusPainel' autoFocus type='name' placeholder='Seu nome' />
                            </Form.Group>
                           
                            <Form.Group  controlId='formHorizontalEmail2' >
                                <Form.Label ClassName='labelFaleConosco' >Email:</Form.Label>
                                    <Form.Control className= 'focusPainel' type='email' placeholder='user@gmail.com' required />
                            </Form.Group>

                            <Form.Group  controlId='FormControlTextarea1'>
                                <Form.Label ClassName='labelFaleConosco' >Sua mensagem:</Form.Label>
                                <Form.Control className= 'focusPainel' as = 'textarea' style = {{resize: 'none'}} Col md={4} placeholder='Digite aqui sua mensagem!'/>
                            </Form.Group>

                            <Form.Group >
                                <Button className = 'faleConoscoEnviar' id = 'faleConoscoEnviar' type='submit'>Enviar</Button>
                            </Form.Group>

                        </Form>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default FloatButton