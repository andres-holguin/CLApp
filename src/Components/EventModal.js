import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form, InputGroup, ListGroup } from 'react-bootstrap';

export default function EventModal(props) {
  // Props
  let show = props.show;
  let eventData = props.event;
  let handleClose = props.onHide;
  let handleUpdateEvent = props.onUpdateEvent;

  // States
  const [textName, setTextName] = useState('');
  const [textComment, setTextComment] = useState('');

  // Refs
  const nameInput = useRef(null);
  const commentInput = useRef(null);

  // Utility Functions
  /* Deep copy of an object */
  let copyObject = (object) => JSON.parse(JSON.stringify(object));
  /* Return a new list of comments with old and new comment */
  function newComments(comment) {
    let comments = eventData.extendedProps.comments;
    // concat comment to existing, if existing
    return comments ? comments.concat(comment) : [comment]
  }

  /**
   * Accepts an updater object that specifies how extended props will be updated
   * in the form: {..., "extendedPropName": newExtendedPropValue, ...}
   */
  function updateEvent(updater) {
    let eventCopy = copyObject(eventData);
    for (var property in updater) eventCopy.extendedProps[property] = updater[property];
    handleUpdateEvent(eventCopy);
  }

  // Handlers
  function handleModalReset() {
    setTextName('');
  }

  function handleNameChange() {
    setTextName(nameInput.current.value);
  }

  function handleKeyDown(e) {
    if(e.keyCode === 13 && (e.ctrlKey || e.metaKey)) handleSubmitComment();
  }

  function handleCommentChange() {
    setTextComment(commentInput.current.value);
  }

  function handleNameSave() {
    let logMessage = "This detail was reassigned to " + textName + " from " + eventData.extendedProps.residentName
    updateEvent({
      "comments": newComments(logMessage),
      "residentName": textName
    });
    setTextName(''); // Clear the name input box
  }

  function handleSubmitComment() {
    updateEvent({
      "comments": newComments(textComment)
    });
    setTextComment(''); // Clear the comment text box
  }

  return (
    <Modal show={show} onHide={handleClose} onEnter={handleModalReset}>
      <Modal.Header closeButton>
        <Modal.Title>
          <b>{eventData?.title + " Detail"}</b>
          <br/>
          <em>{eventData?.startStr}</em>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Assigned Resident</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            value={textName}
            ref={nameInput}
            placeholder={eventData?.extendedProps.residentName}
            onChange={handleNameChange}
          />
          {// If the textbox is filled in and does not match current
          textName && (textName !== eventData?.extendedProps.residentName) &&
          <InputGroup.Append>
            <Button onClick={handleNameSave}>Save</Button>
          </InputGroup.Append>
          }
        </InputGroup>

        <InputGroup>
          <Form.Control value={textComment} as="textarea" ref={commentInput} onChange={handleCommentChange}
            onKeyDown={handleKeyDown}
          />
          <InputGroup.Append>
            <Button onClick={handleSubmitComment} disabled={!textComment}>Submit Comment</Button>
          </InputGroup.Append>
        </InputGroup>
        
        <Modal.Title>Comments</Modal.Title>
        <ListGroup>
          {eventData?.extendedProps.comments?.map(comment => <ListGroup.Item key={comment}>{comment}</ListGroup.Item>)}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}
