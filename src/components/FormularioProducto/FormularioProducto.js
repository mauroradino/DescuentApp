import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormularioModal from '../FormularioModal/FormularioModal';

const FormularioProducto = ({ show, handleClose, handleAgregar }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Añadir Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormularioModal />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleAgregar}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormularioProducto