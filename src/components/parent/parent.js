import React, { useState } from "react";
import List from "./list/list";
import Form from "./form/form";

function Parent() {
  const [dataList, setDataList] = useState([]);

  const addTask = (taskName) => {
    let newId = 1; // Default value for the first task
    if (dataList.length > 0) {
      // If dataList is not empty, calculate the next ID
      newId = dataList[0].id + 1;
    }

    const newTask = { id: newId, name: taskName };
    setDataList([newTask, ...dataList]);
  };

  const removeTask = (id) => {
    // Filter out the task with the specified id
    const updatedList = dataList.filter((task) => task.id !== id);
    setDataList(updatedList);
  };

  const toggleDone = (id) => {
    // Map over the tasks and toggle isDone for the task with the specified id
    const updatedList = dataList.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setDataList(updatedList);
  };

  return (
    <div className="container m-5 mx-auto">
      <div className="col-8 lg-col-12 border border-danger border-3 rounded p-3 m-auto ">
        <Form addTask={addTask} />
        <div className="mt-2 bg-primary-subtle border border-danger border-3 rounded">
          <h4 className="text-center m-3">Let's get some work done!</h4>
          {dataList.map((item) => (
            <List
              key={item.id}
              task={item}
              removeTask={removeTask}
              toggleDone={toggleDone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Parent;

