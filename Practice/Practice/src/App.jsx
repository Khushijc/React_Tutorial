import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import { useState } from "react"

function App() {
  let [foodItems, setFoodItems] = useState(['dal', 'khidachi', 'roti', 'green vegiee'])
  // let [textToShow, setTextState] = useState()
  const OnkeyDown = (event) => {
    if(event.key==='Enter'){
      let newFoodItem=event.target.value;
      let newItems=[...foodItems,newFoodItem]
      setFoodItems(newItems)
      console.log(newFoodItem);
      
    }
  }
  return (
    <Container>
      <h1>Healthy food</h1>
      <FoodInput handleKeyDown={OnkeyDown}></FoodInput>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  )
}

export default App