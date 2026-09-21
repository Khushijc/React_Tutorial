import style from "./Items.module.css"

const Items=({foodItem})=>{
  return <li className={`${style["kg-items"]}`}>{foodItem}</li>
}
export default Items;