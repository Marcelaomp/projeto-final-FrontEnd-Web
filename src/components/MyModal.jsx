import React from 'react'
import {
  Modal
} from 'react-bootstrap';

function MyModal(props) {
    return (
      <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      >
        <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
                <h4>{props.nome}</h4>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{props.descricao}</p>
        </Modal.Body>
      </Modal>
    );
  }

  export default MyModal