import style from "./FoodInput.module.css"
const FoodInput=({handleKeyDown})=>{
  
  return <input type="text" placeholder="Enter the Item" className={style.FoodInput}
  onKeyDown={handleKeyDown}
  />
}
export default FoodInput