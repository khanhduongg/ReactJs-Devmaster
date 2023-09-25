import React, { useEffect, useState } from "react";
import data from "../data/datas";
function ListCategories() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(data);
    console.log(list);
  }, []);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Icon</th>
            <th>metaDescription</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.icon}</td>
                <td>{item.metaDescription}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListCategories;
