
import { useState } from 'react';
import { Button,Modal} from 'react-bootstrap';
import AllClientTable from './components/allClientTable';

const ExistingClients = (props)=>{
    return<div>
        
         <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AllClientTable/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
}
export default ExistingClients;