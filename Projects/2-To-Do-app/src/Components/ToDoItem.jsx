function ToDoItem({itemName,itemDate}) {
  // let itemName = " Make a birthday wish"
  // let itemDate = "2/2/27"
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
export default ToDoItem