import React from "react";
import "./list.css";

function List(props) {
  const { task, removeTask, toggleDone } = props;

  return (
    <>
      <div
        className={`row p-3 ${
          task.isDone ? "bg-success" : "bg-primary"
        } bg-opacity-50 border border-danger border-3 rounded m-auto mb-1`}
      >
        <div className="d-flex justify-content-evenly align-items-center ">
          <div
            className={`col-6 ${task.isDone ? "text-decoration-line-through" : ""}`}
          >
            {`Task: ${task.name}`}
          </div>
          <button
            onClick={() => toggleDone(task.id)}
            className="md-col-auto  btn btn-primary toggle"
          >
            {task.isDone ? "UNDO" : "Done"}
          </button>
          <button
            className="md-col-auto  btn btn-danger"
            onClick={() => removeTask(task.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default List;

