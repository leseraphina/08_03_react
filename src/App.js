import React,{useState} from 'react'
import { data,title } from "./data";
import './App.css'
// 

function List({listValue}){
  return(
    <div>
      {listValue.map((item,index) => {
        return (
          <p key={index}>{item.color}</p>
        )
      })}
    </div>
  )
}
function App() {
  const [listValue,setListValue] = useState(data)
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false)
);  

function handleOnChange(selectColor){
  const updatedChecked = checkedState.map((item, index) =>
  index === selectColor ? !item : item
);
setCheckedState(updatedChecked)
const updateColor = listValue.filter((item,index)=> item.color === selectColor )
setListValue(updateColor)

}

return (
  <div className="App">
    <h3>title</h3>
    <ul>
    {
        title.map((item,index) => {return (
          <li key={index}>

            <input
            type="checkbox"
            name={item} 
            value={item}
            checked={checkedState[index]}
            onChange={()=>handleOnChange(index) }/>
            <label>{item}</label>
    
          </li>
        )})
      }
       
  </ul>
  <List 
    listValue = {listValue}/>
  </div>
);
}
export default App;
