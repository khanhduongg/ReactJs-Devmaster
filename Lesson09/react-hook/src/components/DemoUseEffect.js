import React, { useEffect, useState } from "react";

export default function DemoUseEffect() {
  // sử dụng useEffect với một tham số callback
  useEffect(() => {
    console.log("đây là useEffect với một tham số");
  });
  //re-render
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => (prev = prev + 1));
    setList ([
        ...list,count
    ])
  };
  // được sử dụng với tham số thứ 2[] được thực hiện duy nhất 1 lần khi componet được mount
  useEffect(() => {
    console.log("Đây là useEffect với tham số thứ 2 là []");
  }, []);
  // sử dụng useEffect với [deps] = > được thực hiện mỗi khi deps thay đổi
  const [list, setList] = useState([10, 20]);
  useEffect(() => {
    console.log("Đây là useEffect với tham số thứ 2 là [list]");
  }, [list]);
  return (
    <div className="alert alert-success">
      <h2>đây là useEffect với một tham số</h2>
      <p>Count :{count}</p>
      <button onClick={handleClick}> Click ++</button>
    </div>
  );
}
