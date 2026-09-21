import style from "./Items.module.css"

const Items = ({ foodItem,handleBuyButton}) => {
  return <p className={`${style["kg-items"]}`}>{foodItem}
    <button className={`${style.button} btn btn-info`}

      onClick={handleBuyButton}>buy</button>
  </p>
}
export default Items;