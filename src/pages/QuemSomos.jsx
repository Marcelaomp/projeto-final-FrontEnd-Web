import React, {useState} from 'react'
import {
    Container,
    Row,
    Image
} from 'react-bootstrap';
import '../styles/quemSomos.css'
import SociosJson from'../json/socios.json'
import MyModal from '../components/MyModal.jsx'

function QuemSomos() {
    const [lista] = useState (SociosJson);
    const [modalShow, setModalShow] = useState(false);
    const [pessoa, setPessoa] = useState({})

    function mostraModal (p) {

        setModalShow(true)
        console.log(modalShow)
        console.log(p)
        setPessoa({...p})

    }
      
    return (
        <Container fluid>

            <Row>
                <Image id='imagemGinasio' src='imagens/quem-somos/ginasio.jpg' alt='Foto do ginasio da Teresópolis Adventure' fluid />
            </Row>

            <Container>
                    
                <div className='quemSomos'>

                    <Row className='d-flex justify-content-center'>
                        <h1 id='titulo-quemSomos'>Quem somos?</h1>
                    </Row>

                    <div className='primeiro'>
                        <Image id='imagemLoja' src='imagens/quem-somos/loja.jpg' alt='Foto da Loja da Teresópolis Adventure' fluid />

                        <p >Aventureiros e amantes da natureza desde cedo, nos apaixonamos por este fascinante estilo
                            de vida. Iniciamos uma série de viagens pela Europa e Estados Unidos. Visitamos dezenas de
                            ginásios, dos mais antigos na França, aos mais modernos na Califórnia, e de onde além de escalar
                            e fazer trilhas, trouxemos novas ideias para montar a Teresópolis Adventure.<br /><br />
                            Iniciamos apenas como uma loja de venda de equipamentos para pratica de hiking e climb com uma 
                            estrutura em formato de ginásio para realização de treinamentos de escalada.
                        </p>
                    </div>
                    <div className='segundo'>
                        <Image id='imagemGinasio1' src='imagens/quem-somos/ginasio1.jpg' alt='Foto do ginasio da Teresópolis Adventure' fluid />

                        <p >Rapidamente a Teresópolis Adventure se tornou um sucesso e passamos a receber escaladores
                            e aventureiros vindos de longe para ter a oportunidade de treinar numa estrutura e recursos até
                            então inéditos na cidade. Sempre inovando e buscando novas tendências, em 2000 uma grande
                            ampliação na prestação de serviços foi realizada, passamos a oferecer pacotes de passeios nas mais
                            belas e tradicionais montanhas da cidade.<br /><br />Mais do que vender produtos e serviços, nossa
                            missão é fomentar a prática dos esportes de aventura e outdoor, e levá-lo para a montanha, de 
                            forma que você possa curtir este fascinante esporte, independentemente do nível de seu objetivo.
                        </p>
                    </div>
                </div>          
            </Container>

            <div className='socios'>      

                    <h2>Sócios</h2>
            
                <ul className='imgs'>    
                    {lista.socios.map(s => (<li key={s.id}>
                        <figure>
                            <div className='imgHoverZoom imgHoverZoomOut' >
                                <Image onClick={() => mostraModal(s) } src={s.foto} alt={s.descricao}/>
                            </div>
                            <figcaption>{s.nome}</figcaption>
                        </figure>
                           {} 
                    </li>))}

                   <MyModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        nome={pessoa.nome}
                        descricao={pessoa.descricao}

                    />
                </ul>    
            </div> 
            
        </Container>
    )
}
export default QuemSomos