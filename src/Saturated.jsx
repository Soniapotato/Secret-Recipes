import React, { useState } from 'react';


export default function Saturated ({percent, total}) {

  let percentFloor = Math.round(percent.quantity);
  let totalFloor = Math.round(total.quantity);


  return (
    <div className="tag-info">
      <span className="fats">Saturated Fat</span>
      <span className="fats"> {totalFloor + total.unit} </span>
      <span className="fats"> {percentFloor + percent.unit} </span>
    </div>
  )
}