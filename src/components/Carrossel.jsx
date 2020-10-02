import React, { useState } from 'react';
import {
    Carousel,
    Col,
    Row,
    Image
} from 'react-bootstrap';
import '../styles/carrossel.css';
import hoteisJson from '../json/hoteis.json'

function Carrossel(){
    const [lista] = useState(hoteisJson)
    var cont = 0

    let ordem

    function gerarOrdemCarrossel () {
        let tot = lista.hoteis.length
        return lista.hoteis.map((item, i) => {
            let a = (i * 3) % tot
            let b = (a + 1) % tot
            let c = (a + 2) % tot
            //use essa linha se quiser retornar apenas a matriz, e depois separar()
            return [a, b, c]
            //use essa linha se já quiser montar uma nova lista de elementos, sem precisar mais do separar()
            //return [lista[a], lista[b], lista[c]]
        })
    } 
    
    ordem = gerarOrdemCarrossel ()
      
    function separar(h) {
        return h.map(i => lista.hoteis[i])
        }
        
        return(
            <div>
            <Row className='d-flex justify-content-center'>
                <h2 id='hospedagem'>Hospedagens</h2>
            </Row> 
            <Row>
                <Col>
                    <Carousel>
                        {ordem.map((h) => {
                            // mestre
                            return (
                        <Carousel.Item key={cont++}>
                            <Row>
                                {separar(h).map(item => {
                                    // detalhe
                                    return (
                                <Col xs={4} md={4} key={item.id}>
                                    <a href={item.site} target='blank'>
                                        <figure>
                                            <Image src={item.imagem} fluid/>
                                            <figcaption> {item.nome} </figcaption>
                                        </figure>
                                    </a>

                                </Col>
                                    )})
                                }
                            </Row>
                        </Carousel.Item>
                            )
                        }
                        )}
                    </Carousel>
                </Col>
            </Row> 
        </div>
    )
}
export default Carrossel