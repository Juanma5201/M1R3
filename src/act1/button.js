import React from "react";
import { useEffect } from "react";
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';





class Boton extends React.Component{
    state={
        abierto: false,
    }
    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
        
    }
    render(){
        return(
            <>
            <div className="principal">
                <div className="secundario">
            <Button color="success"onClick={this.abrirModal}>Mostrar modal</Button>
                </div>
            </div>


            <Modal isOpen={this.state.abierto}>
                <ModalHeader>
                    Inicial sesión
                </ModalHeader>
            
                <ModalBody>
                    <FormGroup>
                        <Label for="usuario">Usuario</Label>
                        <Input type="text" id="usuario"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contraseña">Contraseña</Label>
                        <Input type="text" id="contraseña"/>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                <Button color="primary">Iniciar sesión</Button>
                <Button color="secondary"onClick={this.abrirModal}>cerrar</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default Boton
