import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DatoModal = ({ showEditar, handleCloseEditar, handleEditar }) => {
    return (
        <Modal show={showEditar} onHide={handleCloseEditar}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Dato</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*FORMULARIO EDITAR DATO*/}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditar}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleEditar}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DatoModal