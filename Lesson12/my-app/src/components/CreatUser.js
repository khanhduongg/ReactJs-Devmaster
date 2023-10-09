import axios from "../api/api-server-online";
import React, { useState } from "react";

function CreatUser() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
    // hàm xử lý sự kiện thêm mới user
    const handleCreatUser = async()=>{
        await axios.post("users",{userName,pass})
    }
  return (
    <div className="form">
      <h1>Thêm mới một user</h1>
      <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={pass}
          onChange={(event) => setPass(event.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleCreatUser}>CreatUser</button>
    </div>
  );
}

export default CreatUser;
