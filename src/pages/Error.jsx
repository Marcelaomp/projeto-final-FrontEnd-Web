import React from 'react'
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../styles/error.css'

function Error(){
    return(
        <div>
            <Image src='imagens/404.png' fluid></Image>
            <h3><Link to='/' id='error'>Retorne para página inicial</Link></h3>
        </div>
    )
}
export default Error