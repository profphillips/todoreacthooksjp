import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "./context/todos.context";

function TodoApp() {
  return (
    <div>
      <div>TODOS WITH HOOKS</div>
      <p>In TodoApp p tag</p>
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </div>
  );
}
export default TodoApp;
