import { useContext } from "react";
import { ToDoItemContext } from "../store/todo-item-store";

const WelcomeMsg=()=>{
  const { todoItems } = useContext(ToDoItemContext)  

  return todoItems.length === 0 && <p className="para">Enjoy your day</p>
}
export default WelcomeMsg;