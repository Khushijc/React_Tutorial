import AppName from "./Components/AppName"
import AddToDo from "./Components/AddToDo"
import "./App.css"
import ToDoItems from "./Components/ToDoItems"
import { useState } from "react"
import WelcomeMsg from "./Components/welcomeMsg"
function App() {

  const initialtodoItems = []

  const [todoitems,setTodoitems]=useState(initialtodoItems)

  const handleNewItem=(itemName,itemDueDate)=>{
    const newTodoitems=[
      ...todoitems,
      {name: itemName,DueDate: itemDueDate}
    ]
    setTodoitems(newTodoitems)
  }

  const handleDeleteItem=(todoItemName)=>{
    const newTodoItem=todoitems.filter(item=>item.name!==todoItemName)
    setTodoitems(newTodoItem);
  }

  return (
      <center className="todo-container">
        <AppName />
        <AddToDo onNewItem={handleNewItem}/>
        {(todoitems.length==0) && <WelcomeMsg></WelcomeMsg>}
        <div className="items-container">
          <ToDoItems todoItems={todoitems} onDeleteClick={handleDeleteItem}/>
        </div>

      </center>
  )
}

export default App
