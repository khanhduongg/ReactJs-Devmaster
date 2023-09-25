
import "./App.css";
import React, { useState } from "react";
import DemoUseEffect from "./components/DemoUseEffect";
import DemoContext from "./components/DemoContext";
import ExUseCallback from "./components/ExUseCallback";
import ListCategories from "./components/ListCategories";
import InsertCategories from "./components/InsertCategories";


function App() {

    const lists = ["arr1", "arr2"];
    const [count, setCount] = useState(0);
    const [list, setList] = useState(lists);
    function handleList() {
      setList([...list, parseInt(Math.random() * 1000)]);
    }
  return (
    <div className="container">
      <h2>Tìm hiểu về useState</h2>
      <div>
        <p>You clicked {count} times</p>
        <p>list : {list.toString()}</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
        <button onClick={handleList}>
          Click Me
        </button>
      </div>
      <DemoUseEffect/>
      <DemoContext/>
      <ExUseCallback/>
      <ListCategories/>
      <InsertCategories/>
    </div>
  );
}

export default App;
