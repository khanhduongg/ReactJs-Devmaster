import React, { Component } from "react";
import Students from "./Students";

export default class ListStudents extends Component {
  render() {
    let { renderStundents } =this.props;
    let elementStudents = renderStundents.map((student,index)=>{
        return <Students key ={index} renderStundents={student} stt={index+1}/>;
    })

    return (
        <div className="col-lg-7">

        <div className="card-body">
          <h3 className="card-title">Danh sách sinh viên</h3>
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {elementStudents}
              </tbody>
            </table>
          </div>
        </div>
        </div>
    );
  }
}
