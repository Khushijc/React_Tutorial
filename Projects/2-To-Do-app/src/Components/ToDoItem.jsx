import { MdDeleteForever } from "react-icons/md";

function ToDoItem({ itemName, itemDate, onDeleteClick }) {
  // let itemName = " Make a birthday wish"
  // let itemDate = "2/2/27"
  return <div className="container">
    <div className="row kg-row">
      <div className="col-6">
        {itemName}
      </div>
      <div className="col-4">{itemDate}</div>
      <div className="col-2">
        <button type="button"
          className="btn btn-danger kg-button"
          onClick={() => onDeleteClick(itemName)}
        >
          Delete
          <MdDeleteForever />
        </button>
      </div>
    </div>
  </div>
}
export default ToDoItem