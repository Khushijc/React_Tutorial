import { useState } from "react"

function AddToDo({onNewItem}) {

  const [todoName,setTodoName]=useState()
  const [dueDate,setDueDate]=useState()
  const handleNamechange=(event)=>{
    setTodoName(event.target.value);
    
  }
  const handleDatechange=(event)=>{
    setDueDate(event.target.value)
  }

  const handleAddBotton=()=>{
    onNewItem(todoName,dueDate)
    setDueDate("")
    setTodoName("")

  }
  return <div className="container">
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" 
        placeholder="Enter you To-do here" 
        value={todoName}
        onChange={handleNamechange}/>
      </div>
      <div className="col-4"><input type="date" 
      value={dueDate}
      onChange={handleDatechange}/></div>
      <div className="col-2">
        <button type="button" className="btn btn-success kg-button" onClick={handleAddBotton}>Add</button>
      </div>
    </div>
  </div>
}
export default AddToDo