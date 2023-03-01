import React from 'react';



export default function TotalFat ({percent, total}) {
  let percentFloor = Math.round(percent.quantity);
  let totalFloor = Math.round(total.quantity);

  return (
    <div className="tag-info">
      <span className="name-stat">Total Fat</span>
      <span> {totalFloor + total.unit}</span>
      <span> {percentFloor + percent.unit} </span>
    </div>
  )
  }