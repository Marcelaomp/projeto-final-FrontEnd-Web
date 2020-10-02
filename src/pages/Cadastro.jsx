import React, {useState} from 'react'
import {Form, Col, Row, Button, Container} from 'react-bootstrap'
import EstadosJson from'../json/estados.json'
import '../styles/cadastro.css'

function Cadastro () {

    // let [email, setEmail] = useState();
    // let [senha, setSenha] = useState();
    // let [nome, setNome] = useState();
    // let [telefone, setTelefone] = useState();
    // let [endereco, setEndereco] = useState();
    // let [cidade, setCidade] = useState();
    // let [estado, setEestado] = useState();
    // let [cep, setCep] = useState();

    // const handleEnvio = (event) => {
    //     event.preventDefault();
    //     console.log('envio')
    // }

    // const handleChange = ({target}) => {
    //     // const novo = {}
    //     // novo[target.id] = target.value         
    //     let novo = {
    //         [target.id]: target.value
    //     }

    //     if (target.id === 'nome') {
    //         console.log('nome ' + novo.nome)
    //     } else {
    //         console.log('email ' + novo.email)
    //     }
    // }
    const [lista] = useState(EstadosJson)
    
    return (
    
      <Container>
          <h2 id='cad'>Cadastro</h2>
          <Row className = 'd-flex justify-content-center'>
              <Form className='form'>
    
                  <Form.Row>
                      <Form.Group as={Col}>
                          <Form.Label>Email</Form.Label>
                          <Form.Control className= 'focusPainel' type='email' placeholder='user@gmail.com' required/>
                      </Form.Group>
    
                      <Form.Group as={Col} >
                          <Form.Label>Senha</Form.Label>
                          <Form.Control className= 'focusPainel' type='password' placeholder='Informe a senha' required/>
                        </Form.Group>
                  </Form.Row>
    
                  <Form.Row>
                      <Form.Group as={Col}>
                          <Form.Label>Nome Completo</Form.Label>
                          <Form.Control className= 'focusPainel' placeholder='Nome Completo' required/>
                      </Form.Group>
          
                      <Form.Group  as={Col} md={4}>
                          <Form.Label>Telefone</Form.Label>
                          <Form.Control className= 'focusPainel' placeholder='(xx)xxxxx-xxxx' required/>
                      </Form.Group>
                  </Form.Row>
    
                  <Form.Group>
                      <Form.Label>Endereço</Form.Label>
                      <Form.Control className= 'focusPainel' placeholder='Ex: Rua Alberto Torres, 100'/>
                  </Form.Group>
    
                  <Form.Row>
                      <Form.Group as={Col} className= 'focusPainel'>
                          <Form.Label>Cidade</Form.Label>
                          <Form.Control className= 'focusPainel' defaultValue='Teresópolis'/>
                      </Form.Group>
            
                      <Form.Group as={Col} md='3' className= 'focusPainel'>
                          <Form.Label>Estado</Form.Label>
                          <Form.Control className= 'focusPainel' as='select' defaultValue='RJ'>
                            {lista.estados.map(e => (
                            <option>{e.estado}</option>
                            ))}
                          </Form.Control>
                      </Form.Group>
          
                      <Form.Group as={Col} className= 'focusPainel'>
                          <Form.Label>Cep</Form.Label>
                          <Form.Control className= 'focusPainel' placeholder='xxxx-xxx'/>
                      </Form.Group>
                  </Form.Row>
    
                  <Button id ='botaoCad' variant='primary' type='submit'>
                      Cadastrar
                  </Button>
              </Form>
          </Row>
      </Container>
    
    );
}

export default Cadastro