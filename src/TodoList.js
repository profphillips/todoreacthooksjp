import React, { useContext } from "react";
import Todo from "./Todo";
import { TodosContext } from "./context/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <div className='todos'>
        {todos.map((todo, i) => (
          // To add a key to a fragment, we have to use the long-hand version
          // rather than <> </>, we have to use <React.Fragment>
          <React.Fragment key={i}>
            <Todo {...todo} key={todo.id} />
            {i < todos.length - 1}
          </React.Fragment>
        ))}
      </div>
    );
  return null;
}
export default TodoList;
