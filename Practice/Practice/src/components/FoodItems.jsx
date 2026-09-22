import { useState } from "react"
import Items from "./Items"


const FoodItems = ({ items }) => {

  let [activeItems,setActiveItems] =useState([])
  const onBuyButton=(item,event)=>{
    let newItems=[...activeItems,item];
    setActiveItems(newItems);

  }
  if (items.length === 0) {
    return <h3>I m still hungry</h3>
  }
  return <ul className="list-group">
    {items.map(item => <Items key={item} 
    foodItem={item} 
    bought={activeItems.includes(item)}
    handleBuyButton={(event)=>onBuyButton(item,event)}/>)}
  </ul>
}
export default FoodItems