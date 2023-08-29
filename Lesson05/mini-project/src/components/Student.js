import React, { Component } from "react";

class Student extends Component {
  // hanldeView = (student)=>{
  //   this.props.onHandleView(true,"Close",student);
  // }
  handleEditOrView = (student ,actionName)=>{
    this.props.onHandleEditOrView(true,actionName,student);
  }
  render() {
    // Lấy dữ liệu truyền qua props từ ListStudent ->Student
    let {renderStudent, stt} = this.props;

    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{renderStudent.studentId}</td>
          <td>{renderStudent.studentName}</td>
          <td>{renderStudent.age}</td>
          <td>
            {renderStudent.sex===true?"Nam":"Nữ"}
          </td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text"
              // onClick={()=>this.hanldeView(renderStudent)}
              onClick={()=>this.handleEditOrView(renderStudent,"Close")}
              >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text"
              // onClick={()=>this.hanldeEdit(renderStudent)}
              onClick={()=>this.handleEditOrView(renderStudent,"Close")}

              >
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default Student;
