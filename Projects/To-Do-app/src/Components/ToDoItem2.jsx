function ToDoItem2() {
  let itemName = "Groceries"
  let itemDate = "22/9/26"
  return <div className="container">
    <div className="row kg-row">
      <div className="col-6">
        {itemName}
      </div>
      <div className="col-4">{itemDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button">Delete</button>
      </div>
    </div>
  </div>
}
export default ToDoItem2