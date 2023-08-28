import React, { Component } from "react";

export default class Students extends Component {
  // handleView = (student)=>{
  //   this.props.onHandleView(true,"Close",student);
  // }
  handleEditorView =(student,actionName)=>{
      this.props.handleEditorView(true,actionName,student)
  }
  render() {
      let {renderStundents,stt} = this.props;
    return (
        <tr>
          <td>{stt}</td>
          <td>{renderStundents.studentId}</td>
          <td>{renderStundents.studentName}</td>
          <td>{renderStundents.age}</td>
          <td>{renderStundents.sex===true?"Nam":"Nữ"}</td>
          <td>
            <div className="template-demo">
              <button type="button" 
              className="btn btn-danger btn-icon-text"
              // onClick={()=>this.handleView(renderStundents)}
              onClick={()=>this.handleEditorView(renderStundents,"Close")}
              >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text"
                onClick={()=>this.handleEditorView(renderStundents,"Update")}

              >
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
    );
  }
}
