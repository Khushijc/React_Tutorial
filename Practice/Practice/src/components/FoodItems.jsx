import Items from "./Items"

const FoodItems = ({items}) => {
 
  if (items.length == 0) {
    return <h3>I m still hungry</h3>
  }
  return <p className="list-group">
    {items.map(item => <Items key={item} foodItem={item} handleBuyButton={()=>console.log("clicked")}></Items>)}
  </p>
}
export default FoodItems