import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'


export default  function Commons() {
        const [open, setOpen] = useState(false);
      
        return (
            <>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Commons
                </Button>
                <Collapse in={open}>
                    <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        Rec Room
                        </InputGroup.Prepend>
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        Laundry Room
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        N Breezeway
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        S Breezeway
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        N Lobbies
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        S Lobbies
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        N Halls
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        S Halls
                        </InputGroup.Prepend>
                    </InputGroup>
                    </div>
                </Collapse>
            </>
        );
      }
      


