import React,{useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
 const [selectedCategory,setSelectedCategory]=useState(items)
  function filter(e){
   let category=e.target.value
   if (category === "All"){
    setSelectedCategory(items)
   }
    else {
  let filteredItems=items.filter((i)=> i.category===category)
      setSelectedCategory(filteredItems)}
   
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option  value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
