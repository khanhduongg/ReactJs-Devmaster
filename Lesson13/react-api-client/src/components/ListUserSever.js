import React, { useEffect, useState } from "react";
import axios from "../api/api-sever-online";
function ListUserServer() {
  const [ListUsers, setListUsers] = useState([]);
  // lấy dữ liệu từ api local
  const getAllUsers = async () => {
    let respone = await axios.get("Students");
    setListUsers(respone.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <h1>Danh sách users</h1>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {ListUsers.map((item, index) => {
            return (
              <tr>
                <th>{item.studentId}</th>
                <th>{item.studentName}</th>
                <th>{item.age}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListUserServer;
