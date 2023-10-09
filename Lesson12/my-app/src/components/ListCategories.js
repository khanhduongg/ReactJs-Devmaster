import React, { useEffect, useState } from "react";
import axios from "../api/apixm";
function ListCategories() {
  //use State
  const [lisItem, setListItem] = useState([]);
  //get data
  const getAllUsers = async () => {
    let respone = await axios.get("categories");

    setListItem(respone.data);
  };

  //useEffect

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <h1>Danh sách users</h1>
      <table className=" table table - bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>icon</th>
          </tr>
        </thead>
        <tbody>
          {lisItem.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.icon}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export default ListCategories;
