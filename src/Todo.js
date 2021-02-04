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
          <li style={{ textDecoration: completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              tabIndex={-1}
              defaultChecked={completed}
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
            />
            {task}
            <button
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              Delete
            </button>
            <button aria-label="Edit" onClick={toggle}>
              Edit
            </button>
          </li>
        </>
      )}
    </div>
  );
}
export default memo(Todo);
