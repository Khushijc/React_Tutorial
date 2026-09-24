import { createContext, useReducer } from "react";

export const ToDoItemContext = createContext({
  todoItems: [],
  addNewItem: () => { },
  deleteNewItem: () => { }
})

const todoReducer=(CurrTODoItem,action)=>{
  let newToDoItem=CurrTODoItem
  if(action.type==="NEW_ITEM"){
    newToDoItem=[
      ...CurrTODoItem,
      {name:action.payload.itemName,dueDate:action.payload.itemDueDate}
    ]
}else if(action.type==="DELETE_ITEM"){
    newToDoItem = CurrTODoItem.filter(item => item.name !== action.payload.itemName)
  }
  return newToDoItem;
}

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoReducer, [])


  const addNewItem = (itemName, itemDueDate) => {
    const newTodoitems = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    }
    dispatchTodoItems(newTodoitems)
  }

  const deleteNewItem = (todoItemName) => {
    const deleteTodoitems = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      }
    }
    dispatchTodoItems(deleteTodoitems)
  }

  return (
    <ToDoItemContext.Provider value={{ todoItems, addNewItem, deleteNewItem }}>
      {children}
    </ToDoItemContext.Provider>
  )
}
export default TodoItemsContextProvider;