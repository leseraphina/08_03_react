import React,{useEffect, useState} from 'react'
import { data } from "./data";
import './App.css'
// 
const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function App() {
  const [total, setTotal] = useState(0);
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false)
);  
const handleOnChange = (position) => {
  const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
  );

  setCheckedState(updatedCheckedState);

  const totalPrice = updatedCheckedState.reduce(
    (sum, currentState, index) => {
      if (currentState === true) {
        return sum + data[index].price;
      }
      return sum;
    },
    0
  );

  setTotal(totalPrice);
};

return (
  <div className="App">
    <h3>title</h3>
    <ul>
      {
        data.map(({name,price},index) => {return (
          <li key={index}>

            <input
            type="checkbox"
            name={name} 
            value={name}
            checked={checkedState[index]}
            onChange={()=>handleOnChange(index) }/>
            <label>{name}</label>
          <span>
            {getFormattedPrice(price)}
          </span>
          </li>
        )})
      }
  </ul>
      <p>

          <span>Total:</span>
          <b>{getFormattedPrice(total)}</b>

      </p>
    
  </div>
);
}
export default App;
