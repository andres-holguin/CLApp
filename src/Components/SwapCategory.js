import React, { useState } from 'react';
import SwapTile from './SwapTile';
import ListGroup from 'react-bootstrap/ListGroup'
import { Collapse } from 'react-bootstrap';

export default function SwapCategory(props) {
  const [open, setOpen] = useState(false);

  const items = [1,2,3]

  const SwapTileList = items.map(item =>
    <SwapTile key={item}></SwapTile>
  );

  return (
    <>
      <ListGroup.Item disabled={false} onClick={() => setOpen(!open)}>A Category</ListGroup.Item>
      <Collapse in={open}>
        <div>{SwapTileList}</div>
      </Collapse>
    </>
  )
} 