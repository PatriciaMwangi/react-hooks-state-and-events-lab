import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
const [toggle,setToggle]=useState(false)
function change(){
  
  setToggle((toggle)=>!toggle)
}
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = toggle ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={change}>{appClass ? 'Dark Mode': 'Light Mode'}</button>
      </header>
      <ShoppingList items={itemData} name={itemData.name} category={itemData.category}/>
    </div>
  );
}

export default App;
