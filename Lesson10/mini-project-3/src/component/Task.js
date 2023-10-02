import React from "react";

function Task({ renderTask, rollNo, onEdit,onDelete }) {
  // hàm xử lý sự kiện edit
  const hanldeEdit = (task) => {
    onEdit(true, "Update", task);
  };
  const handleDelete =(task)=>{
    onDelete (true,task)
  }
  let elementLevel = <span className="label label-danger">Small</span>;
  if (renderTask.level ==2 ) {
    elementLevel = <span className="label label-info">Medium</span>;
  } else if (renderTask.level == 1) {
    elementLevel = <span className="label label-default">High</span>;
  }
  return (
    <>
      <tr>
        <td className="text-center">{rollNo}</td>
        <td>{renderTask.taskName}</td>
        <td className="text-center">{elementLevel}</td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => hanldeEdit(renderTask)}
          >
            Edit
          </button>
          <button type="button" className="btn btn-danger"
          onClick={()=> handleDelete(renderTask)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Task;
