import React, { useState } from 'react';
// const data = require ('../data.json');
import Labels from './HealthLabels.jsx';
import Ingredients from './Ingredient.jsx';
import Cholesterol from './Cholesterol.jsx'
import Calcium from './Calcium.jsx';
import Carbs from './Carbs.jsx';
import Iron from './Iron.jsx';
import Potassium from './Potassium.jsx';
import Protein from './Protein.jsx';
import Sodium from './Sodium.jsx';
import VitaminD from './VitaminD.jsx';
import TotalFat from './TotalFat.jsx';
import Saturated from './Saturated.jsx';
import TransFat from './TransFat.jsx';

export default function Breakdown ({healthStats, title}) {

  let data = healthStats;
  console.log(data)

return (
  <div className="breakdown">
    <h1> Summary for {title}</h1>
    <div>
    Total Calories : {data.calories}
    </div>
    <div className="ingredient-list">
    {
      data.ingredients.map((item) => (<Ingredients item={item}/>))
    }
    </div>
    <div className="flex-grid">
    {
      data.healthLabels.map((label) => (<Labels label={label}/>))
    }
    </div>
    <div className="nutrient-info">
      <div className='tag-info-header'>
      <span> Stat</span>
      <span>Quantity </span>
      <span> Daily Percentage</span>
      </div>
      <TotalFat percent={data.totalDaily.FAT} total={data.totalNutrients.FAT} />
      <Saturated total={data.totalNutrients.FASAT} percent={data.totalDaily.FASAT} />
      <TransFat total={data.totalNutrients.FATRN || 0}  />
    <Cholesterol percent={data.totalDaily.CHOLE} total={data.totalNutrients.CHOLE}/>
    <Sodium percent={data.totalDaily.NA} total={data.totalNutrients.NA}/>
    <Carbs percent={data.totalDaily.CHOCDF} total={data.totalNutrients.CHOCDF}/>
    <Protein percent={data.totalDaily.PROCNT} total={data.totalNutrients.PROCNT} />
    <VitaminD percent={data.totalDaily.VITD} total={data.totalNutrients.VITD} />
    <Calcium percent={data.totalDaily.CA} total ={data.totalNutrients.CA} />
    <Iron percent={data.totalDaily.FE} total={data.totalNutrients.FE} />
    <Potassium percent={data.totalDaily.K} total={data.totalNutrients.K} />
    <span className="disclaimer"> *Percent Daily Values are based on a 2000 calorie diet</span>
    </div>
  </div>
)

}