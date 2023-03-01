import React, { useState } from 'react';
import '../style.css';
import axios from 'axios';
import Breakdown from './Breakdown.jsx'

export default function App () {
  const [title, setTitle ] = useState('');
  const [ingrList, setIngr] = useState('');
  const [healthStats, setStats] = useState({})
  const [render, setRender] = useState(false);

  const updateTitle = (e) => {
    if(title < 1 ) {
      setRender(false);
    }
    setTitle(e.target.value)
  }
  const updateIngredients = (e) => {
    setIngr(e.target.value)
  }
  const submitinfo = () => {
    let ingr = ingrList.split('\n')
    axios.post('http://localhost:8080/ingredients', {
      title: title,
      ingr: ingr
    }).then((info) => {
      setRender(true);
      setStats(info.data);
    })
    // setRender(true);
  }
  return (
    <div className="master-app">
      <div className="inner-div">
        <div className="dotted">
      <div className="background">
       <form>
        {/* <label className="title-recipe"> Is your Recipe Healthy? </label> <br></br> */}
        <label className="labels-text"> Enter Name of Recipe:</label> <br></br>
        <input className="title-input" placeholder="Name" value={title} onChange={updateTitle}/> <br></br>
        <label className="labels-text"> Recipe Ingredients: </label> <br></br>
        <label className="small-text"> *separate ingredients with new line </label>
        <textarea rows="100" className='recipe-input' value={ingrList} onChange={updateIngredients} />
       </form>
       <button onClick={submitinfo}> Check</button>
       {
        render ?
       <Breakdown healthStats={healthStats} title={title}/>
       : null
       }
       </div>
       </div>
    </div>
    </div>
  )
}