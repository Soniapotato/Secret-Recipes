import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import SingleFood from './SingleFood.jsx';

// const oldRecipeStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     position: 'absolute',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     height: '500px',
//     width: '600px'
//   },
// }

export default function App () {
  const [open, setOpen] = useState(false);
  const [ingredients, setFood] = useState([]);
  const [recipe, setRecipe] = useState('');
  const [fetched, setFetched] = useState(false);
  const [calories, setCal] = useState(0);
  const [err, setError] = useState(false);

  const searchDB = () => {
    axios.get('http://localhost:8080/history', {
      params: {
       title:recipe
      }
    }).then((items) => {
      console.log('this is items when chicken', items)
      if(items.data === 1) {
        setError(true)
      } else {
      setError(false);
      setFood(items.data.ingredients)
      setCal(items.data.calories)
      setFetched(true);
      console.log('this is ingredients', items.data.ingredients)
      }
    })
  }
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [open]);
const updateName = (e) => {
  if(e.target.value.length < 1) {
    setError(false);
    setFetched(false);
  }
  setRecipe(e.target.value);
}
  Modal.setAppElement('#root');
return (
  <span>
      <button  onClick={setOpen}> Find</button>
      <Modal
        isOpen={open}
        className='oldRecipeStyles'
        onRequestClose={() => setOpen(false)}
        // style={oldRecipeStyles} >
        >
          <input className="eacb-history-item" placeholder="recipe name" value={recipe} onChange={updateName}/>
          <button onClick={searchDB}> Find Mine</button>
          {
            err ? (<div>No Recipes Found. Try Adding It</div>) : null
          }
          {
            fetched ? (<div className="each-history-item"> Calories: {calories}</div>) : null
          }
          {
            fetched ?
          ingredients.map((ingredient) => (<SingleFood ingredient={ingredient}/>))
          :null
}
      </Modal>
    </span>
)
}
