import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import { Col, Row, Modal, InputGroup, ButtonGroup } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
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
          <h4>Trade Offer</h4>
          <p>
            You have the following details coming up that you can trade with David.
            Please select one.
          </p>
        
        <Row className="justify-content-md-center">
            <Button variant="secondary">Feb 3 Kitchen</Button>
            <Col sm={1}></Col>
            <Button variant="secondary">Mar 2 Kitchen</Button>
        </Row>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="light" onClick={props.onHide}>Close</Button>
            <Button onClick={props.onHide}>Offer Trade</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default  function Dropdown({title, list, n}) {

    const [modalShow, setModalShow] = React.useState(false);
    const [open, setOpen] = useState(false);

    const items = []
    
    for (var i = 0; i<n; i++) {
        if(title == "Requests") {
            items.push(
                <InputGroup.Append>
                    <Button variant="outline-secondary" 
                    onClick={() => setModalShow(true)} block>
                        {list[i]}
                    </Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </InputGroup.Append>
            )
        } else {
            items.push(

                <InputGroup.Append>
                    <InputGroup.Checkbox></InputGroup.Checkbox>
                    <Button variant="outline-secondary" block>
                        {list[i]}
                    </Button>
                </InputGroup.Append>
          )
        }
    }

    return (
        <>
           <Button block 
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            >
                {title} ({n})
            </Button>
            <Collapse in={open}>
                 <div id="example-collapse-text">
                 <InputGroup className="mb-3">
                    {items}
                </InputGroup>
                 </div>
            </Collapse>
         </>
    );
  }