import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"

function App() {
   let foodItem = ['dal', 'khidachi', 'roti', 'green vegiee']
  return (
    <>
      <h1>Healthy food</h1>
      <FoodItems items={foodItem}></FoodItems>
    </>
  )
}

export default App