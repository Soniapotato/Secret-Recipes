import React, { useState } from 'react';


export default function Calcium ({percent, total}) {
  let percentFloor = Math.round(percent.quantity);
  let totalFloor = Math.round(total.quantity);

  return (
    <div className="tag-info">
      <span className="name-stat">Calcium: </span>
      <span> {totalFloor + total.unit}</span>
      <span> {percentFloor + percent.unit} </span>
    </div>
  )
  }