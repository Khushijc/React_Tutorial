import AppName from "./Components/AppName"
import AddToDo from "./Components/AddToDo"
import "./App.css"
import ToDoItems from "./Components/ToDoItems"
import WelcomeMsg from "./Components/welcomeMsg"
import TodoItemsContextProvider from "./store/todo-item-store"

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddToDo/>
        <WelcomeMsg></WelcomeMsg>
        <div className="items-container">
          <ToDoItems />
        </div>
      </center>
    </TodoItemsContextProvider>
  )
}

export default App
