import style from "./Items.module.css"

const Items = ({ foodItem,bought,handleBuyButton}) => {
  return <li className={`${style["kg-items"]} list-group-item ${bought && 'active'}`}>{foodItem}
    <button className={`${style.button} btn btn-info`}
      onClick={handleBuyButton}>buy</button>
  </li>
}
export default Items;