import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

export default  function Bathroom() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Bathroom
            </Button>
            <Collapse in={open}>
                <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    NorthEast 1
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    NorthEast 2
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    NorthWest 1
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    NorthWest 2
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    SouthEast 1
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    SouthEast 2
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    SouthWest 1
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    SouthWest 2
                    </InputGroup.Prepend>
                </InputGroup>
                </div>
            </Collapse>
        </>
    );
  }