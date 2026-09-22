import ToDoItem from "./ToDoItem";

function ToDoItems({ todoItems,onDeleteClick }) {
  return (
    <>
      {todoItems.map((item) => (
        <ToDoItem 
        key={item.name}
        itemName={item.name} 
        itemDate={item.DueDate} 
        onDeleteClick={onDeleteClick}/>
      ))}
    </>
  );
}

export default ToDoItems;