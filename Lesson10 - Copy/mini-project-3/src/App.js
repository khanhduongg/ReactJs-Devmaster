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
    const lists =JSON.parse(localStorage.getItem("DEV2308LM-REACTJS"))
    if (lists==null || lists.length ===0){
      return listTaskInit;
    }
    return lists;
  });
  useEffect(()=>{
    localStorage.setItem("DEV2308LM-REACTJS" ,JSON.stringify(tasks))
    setTasks(tasks)
  },[tasks])
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
