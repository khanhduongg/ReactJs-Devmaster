import axios from "axios";
import React, { useEffect, useState } from "react";

function ListUserLocalSever() {
  const [listUser, setListUser] = useState([]);
  // lấy dữ liệu từ api local
  const getAllUsers = async () => {
    let respone = await axios.get("users");
    console.log("Object api user :", respone);
    console.log("data api user :", respone.data);
    setListUser(respone.data);
  };

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
          <th>Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>

        {
          listUser.map((item,index)=>{
              return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>

              </tr>
          })
        }
      </tbody>
      </table>
      <hr />
    </div>
  );
}

export default ListUserLocalSever;
