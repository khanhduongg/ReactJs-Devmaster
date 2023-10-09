import React, { useState } from "react";
import Title from "./component/Title";
import Control from "./component/Control";
import Form from "./component/Form";
import ListTask from "./component/ListTask";
import { useEffect } from "react";
function App() {
  const listTaskInit = [
    { taskId: 1, taskName: "Học lập trình frontend", level: 1 },
    { taskId: 2, taskName: "Học lập trình reactjs", level: 2 },
    { taskId: 3, taskName: "Lập trình với Frontend - Reactjs", level: 3 },
    {
      taskId: 4,
      taskName: "Lập trình Fullstack (PHP, Java, NetCore_",
      level: 1,
    },
  ];

  // đọc dư liệu localstrorage hoặc api
  const [tasks, setTasks] = useState(() => {
    const lists = JSON.parse(localStorage.getItem("DEV2308LM-REACTJS"));
    if (lists == null || lists.length === 0) {
      return listTaskInit;
    }
    return lists;
  });
  useEffect(() => {
    localStorage.setItem("DEV2308LM-REACTJS", JSON.stringify(tasks));
    setTasks(tasks);
  }, [tasks]);

  // task: add /edit
  let initTask = {
    taskId: 0,
    taskName: "",
    level: 2,
  };
  const [task, setTask] = useState(initTask); // state của form
  // trạng thái hiển thị giá trị trên nút submit của form
  const [actionName, setActionName] = useState("Save");
  // hàm xử lý cho sự kiện add và edit
  const handleAddorEditTask = (toggle, actionName, task) => {
    setToggle(toggle);
    setActionName(actionName);
    if (task === null) {
      setTask(initTask);
    } else {
      setTask(task);
    }
    console.log("Task:", task);
  };
  // hàm xử lý sự kiện cancel
  const hanldeCancel = (toggle) => {
    setToggle(toggle);
  };
  // hàm xử lý chức năng edit => bắt đầu từ component Task
  // hàm xử lý khi submit form
  const hanldeSubmit = (toggle, actionName, task) => {
    setToggle(toggle);
    if (actionName === "Save") {
      //tạo task id tự đông
      let id = tasks[tasks.length - 1].taskId;
      id++;
      let taskAdd = {
        taskId: tasks.length + 1,
        taskName: task.taskName,
        level: task.level,
      };

      // tasks.push(task);
      // setTask(taskAdd);
      setTasks((tasks) => {
        return [...tasks, taskAdd];
      });
    } else {
      // tìm đến trong task xem có task nào là id cần sửa taskId cần sửa sau đó cập nhật lại
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].taskId === task.taskId) {
          tasks[i] = task;
          break;
        }
      }
      setTasks([...tasks]);
    }
  };
  // hàm xử lý sự kiện xóa
  const [toggle, setToggle] = useState(false);
  let elementFrom =
    toggle === true ? (
      <Form
        actionName={actionName}
        renderTasks={task}
        onCancel={hanldeCancel}
        onSubmit={hanldeSubmit}
      />
    ) : (
      ""
    );
  const handleDelete = (task) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].taskId === task.taskId) {
        tasks.splice(i, 1);
        break;
      }
    }
    setTasks([...tasks]);
  };
  const [clone, setClone] = useState(tasks);
  useEffect(() => {
    setClone(tasks);
  }, [tasks]);

  const hanldeSearch = (data) => {
    let arrSearch = clone;
    if (data !== "") {
      arrSearch = arrSearch.filter((x) => x.taskName.includes(data));
      setClone(arrSearch);
    } else {
      setClone(tasks);
      console.log(tasks);
    }
  };
  const hanldeSort = (event) => {
    let arr = event.split("-");
    if (arr[0] === "name") {
      if (arr[1] === "asc") {
        setTasks((prev) => {
          prev.sort((a, b) => {
            let x = a.taskName.toLowerCase();
            let y = b.taskName.toLowerCase();
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });
          return [...prev];
        });
      } else {
        setTasks((prev) => {
          prev.sort((a, b) => {
            let x = a.taskName.toLowerCase();
            let y = b.taskName.toLowerCase();
            if (x < y) {
              return 1;
            }
            if (x > y) { 
              return -1;
            }
            return 0;
          });
          return [...prev];
        });
      }
    }
    if (arr[0] === "level") {
      if (arr[1] === "asc") {
        setTasks((prev) => {
          prev.sort((a, b) => {
            let x = a.level.toLowerCase();
            let y = b.level.toLowerCase();
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });
          return [...prev];
        });
      } else {
        setTasks((prev) => {
          prev.sort((a, b) => {
            let x = a.level.toLowerCase();
            let y = b.level.toLowerCase();
            if (x < y) {
              return 1;
            }
            if (x > y) {
              return -1;
            }
            return 0;
          });
          return [...prev];
        });
      }
    }
    if( arr[0] ==='sort'){
      if(arr[1]==='by'){
        setTasks(tasks)
      }
    }
  };
  return (
    <div>
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control
          onAddTask={handleAddorEditTask}
          onSearch={hanldeSearch}
          onSort={hanldeSort}
        />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
        {elementFrom}
        {/* FORM : END */}
        {/* LIST : START */}
        <ListTask
          renderTasks={clone}
          onEdit={handleAddorEditTask}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
