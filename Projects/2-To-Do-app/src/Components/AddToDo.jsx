import { useRef, useContext } from "react";
import { useState } from "react"
import { IoMdAdd } from "react-icons/io";
import { ToDoItemContext } from "../store/todo-item-store"


function AddToDo() {
  const { addNewItem } = useContext(ToDoItemContext)
  // const [todoName,setTodoName]=useState("")
  // const [dueDate,setDueDate]=useState("")
  const todoName=useRef()
  const dueDate=useRef()

  const handleAddBotton=(event)=>{
    console.log(event);
    event.preventDefault()
    const todoNameEle=todoName.current.value
    const dueDateEle=dueDate.current.value
    addNewItem(todoNameEle,dueDateEle)
    todoName.current.value=""
    dueDate.current.value=""
  }
  return <div className="container">
    <form className="row kg-row" onSubmit={handleAddBotton}>
      <div className="col-6">
        <input type="text" 
        ref={todoName}
        placeholder="Enter you To-do here" />
      </div>
      <div className="col-4"><input type="date" 
      ref={dueDate}/></div>
      <div className="col-2">
        <button className="btn btn-success kg-button">Add <IoMdAdd /></button>
      </div>
    </form>
  </div>
}
export default AddToDo