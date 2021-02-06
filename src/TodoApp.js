import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "./context/todos.context";

function TodoApp() {
  return (
    <div className='todoapp'>
      <div>TODOS WITH HOOKS</div>
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </div>
  );
}
export default TodoApp;
