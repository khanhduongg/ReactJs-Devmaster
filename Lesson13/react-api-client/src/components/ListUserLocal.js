import axios from '../api/api-local'
import React, { useEffect, useState } from 'react'

function ListUserrLocal() {
    const [ListUsers,setListUsers]= useState([])
    // lấy dữ liệu từ api local
    const getAllUsers = async()=>{
        let respone =await axios.get("users")
      setListUsers(respone.data)
    }
    useEffect(()=>{
        getAllUsers()
    },[])
  return (
    <div>
        <h1>Danh sách users</h1>
        <hr/>
        <table className='table table-bordered' >
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
              ListUsers.map((item,index)=>{
                return <tr>
                  <th>{item.id}</th>
                  <th>{item.usersname}</th>
                  <th>{item.password}</th>
                </tr>
              })

            }
          </tbody>
        </table>
    </div>
  )
}

export default ListUserrLocal