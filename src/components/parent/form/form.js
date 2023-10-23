import { useState } from "react";

function Form({ addTask }) {
  const [taskName, setTaskName] = useState("");
  // const input = document.getElementById("autoSizingInput");
  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      addTask(taskName);

      setTaskName("");
      // input.value = "";
    }
  };

  return (
    <div className="p-3 bg-primary bg-opacity-50 border border-danger border-3 rounded">
      <div className="text-center">
        <h1>To-DO App!</h1>
        <h5>Add New To-Do</h5>
      </div>
      <div className=" gy-2 gx-3 align-items-around justify-content-center mx-auto m-3 ">
        <div className="row gy-2 gx-3 align-items-around justify-content-center mx-auto m-3">
          <div className="col-8 ">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              task
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Enter New Task"
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
          </div>
        </div>

        <div className="row gy-2 gx-3 justify-content-center  ">
          <div className="col-8  d-flex justify-content-center">
            <button
              className="btn btn-primary  mx-auto "
              onClick={handleAddTask}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
