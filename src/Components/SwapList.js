import React from 'react';
import SwapCategory from './SwapCategory'

export default function SwapList(props) {
  const items = [1,2,3]

  const SwapCatList = items.map(item =>
    <SwapCategory key={item}></SwapCategory>
  );

  return (
    <>{SwapCatList}</>
  );
}