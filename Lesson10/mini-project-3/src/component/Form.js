import React, { useState } from "react";
import { useEffect } from "react";

function Form({ onCancel, onSubmit, renderTasks, actionName }) {
  const hanldeCancel = () => {
    onCancel(false);
  };
  // state in form
  const [task, setTask] = useState(renderTasks);
  // change in control --> update state
  const hanldeChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setTask((task) => {
      return {
        ...task,
        [name]: value,
      };
    });
  };
  // khi component Form đã mounting; khi dữ liệu renderTask thay đổi
  // cập nhật task
  useEffect(() => {
    setTask(renderTasks);
  }, [renderTasks]);
  const hanldeSubmit = (event) => {
    onSubmit(true, actionName, task);
  };
  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form action="" method="POST" className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="taskName"
              value={task.taskName || ""}
              onChange={hanldeChange}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name="level"
              id="inputDs"
              className="form-control"
              required="required"
              value={task.level || 2}
              onChange={hanldeChange}
            >
              Small
              <option value={3}>Small</option>
              <option value={2}>Medium</option>
              <option value={1}>High</option>
            </select>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={hanldeSubmit}
          >
            {actionName}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={hanldeCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
