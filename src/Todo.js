import React, { useContext, memo } from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./context/todos.context";

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);
  return (
    <div>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <li className="todolistitem">
            <input
              className="todocheckbox"
              type="checkbox"
              tabIndex={-1}
              defaultChecked={completed}
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
            />
            <span
              className="todotask"
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </span>
            <button
              className="todobutton"
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              Delete
            </button>
            <button className="todobutton" aria-label="Edit" onClick={toggle}>
              Edit
            </button>
          </li>
        </>
      )}
    </div>
  );
}
export default memo(Todo);
