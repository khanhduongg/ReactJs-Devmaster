import React, { useState } from "react";
import Title from "./component/Title";
import Control from "./component/Control";
import Form from "./component/Form";
import ListTask from "./component/ListTask";

function App() {
  const listTaskInit = [
    {
      taskID: 1,
      taskName: "Lorem ipsum dolor sit amet, consectetur adipisicing elit A",
      level: 1,
    },
    {
      taskID: 2,
      taskName: "Lorem ipsum dolor sit amet, consectetur adipisicing elit B",
      level: 2,
    },
    {
      taskID: 3,
      taskName: "Lorem ipsum dolor sit amet, consectetur adipisicing elit C",
      level: 3,
    },
    {
      taskID: 4,
      taskName: "Lorem ipsum dolor sit amet, consectetur adipisicing elit D",
      level: 2,
    },
  ];
  // đọc dư liệu localstrorage hoặc api
  const [tasks, setTasks] = useState(() => {
    return listTaskInit;
  });
  const [toggle,setToggle ] = useState(false);
  let elementFrom = (toggle ===true) ? <Form/>:"";

  return (
    <div>
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
        {elementFrom}
        {/* FORM : END */}
        {/* LIST : START */}
        <ListTask renderTasks={tasks} />
      </div>
    </div>
  );
}

export default App;
