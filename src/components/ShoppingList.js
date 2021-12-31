import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState(); 

  function handleSelect (event){
    setSelectedCategory(() => event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = { event => handleSelect(event)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        { selectedCategory == "All" || !selectedCategory? (items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>))):

          (items.filter(item => item.category == selectedCategory).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
          )))}
      </ul>
    </div>
  );
}

export default ShoppingList;
