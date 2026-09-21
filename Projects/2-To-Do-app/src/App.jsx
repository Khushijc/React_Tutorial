import AppName from "./Components/AppName"
import AddToDo from "./Components/AddToDo"
import "./App.css"
import ToDoItems from "./Components/ToDoItems"
function App() {
  const todoItems = [{
    name: "Buy Milk",
    DueDate: "27/9/27"
  },
  {
    name: "Go To Office",
    DueDate: "22/9/27"
  }]

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <div className="items-container">
          <ToDoItems todoItems={todoItems}/>
        </div>

      </center>
    </>
  )
}

export default App
