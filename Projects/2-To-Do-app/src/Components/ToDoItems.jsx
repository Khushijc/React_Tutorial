import ToDoItem from "./ToDoItem";

function ToDoItems({ todoItems }) {
  return (
    <>
      {todoItems.map((item) => (
        <ToDoItem itemName={item.name} itemDate={item.DueDate} />
      ))}
    </>
  );
}

export default ToDoItems;