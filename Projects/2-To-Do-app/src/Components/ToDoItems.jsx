import { useContext } from "react"
import { ToDoItemContext } from "../store/todo-item-store"
import ToDoItem from "./ToDoItem"

const ToDoItems = () => {
  const { todoItems, deleteNewItem } = useContext(ToDoItemContext)
  
  return (
    <>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          itemName={item.name}
          itemDate={item.dueDate}
          onDeleteClick={deleteNewItem}
        />
      ))}
    </>
  )
}

export default ToDoItems