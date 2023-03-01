import React, { useState } from 'react';


export default function Ingredients ({item}) {

  console.log('this is item', item)

  return (
    <div className="ingredient-list">
      Calories in {item.parsed[0].food} {" "}
        {Math.round(item.parsed[0].nutrients.ENERC_KCAL.quantity)}
    </div>
  )
}