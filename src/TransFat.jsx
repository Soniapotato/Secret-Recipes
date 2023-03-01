import React, { useState } from 'react';


export default function TransFat ({total }) {

  let totalFloor = Math.round(total.quantity) || 0;

  console.log(total)

  return (
    <div className="tag-info">
      <span className="fats"> Trans Fat</span>
      <span className="fats"> {totalFloor+ total.unit} </span>
    </div>
  )
}