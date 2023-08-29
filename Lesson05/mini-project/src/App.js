import React, { Component } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          age: 20,
          sex: true,
          birthDate: "2002-04-23",
          birthPlace: "HN",
          address: "25, Vũ Ngọc Phan",
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Văn B",
          age: 21,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "1, Ngô Quyền",
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Văn C",
          age: 19,
          sex: true,
          birthDate: "2003-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
        {
          studentId: "SV004",
          studentName: "Nguyễn Văn D",
          age: 29,
          sex: false,
          birthDate: "2005-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
      ],
      isToggle: false,
      actionName: "",
      student: {},
    };
  }
  handleAddOrEditView = (toggle, actionName, student) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      student: student,
    });
  };
  handleSubmit = (toggle, student) => {
    this.setState({
      isToggle: toggle,
    });
    if (this.state.actionName === "Save") {
      let { students } = this.state;
      students.push(student);
      this.setState({
        students: students,
      });
    } else if (this.state.actionName === "Update") {
      let { students } = this.state;
      for (let i = 0; i < students.length; i++) {
        if (students[i].studentId === student.studentId) {
          students[i] = student;
          break;
        }
      }
      this.setState({
        students: students,
      });
    }
  };
  render() {
    let { students } = this.state;
    let elementForm =
      this.state.isToggle === true ? (
        <Form
          renderActionName={this.state.actionName}
          renderStudent={this.state.student}
          onSubmit={this.handleSubmit}
        />
      ) : (
        " "
      );
    return (
      <div className="container-fluid">
        <Title />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control onAddOrEditView={this.handleAddOrEditView} />
              <ListStudent
                renderStudents={students}
                onHandleEditOrView={this.handleAddOrEditView}
              />
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* <Form />
             */}
            {elementForm}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
