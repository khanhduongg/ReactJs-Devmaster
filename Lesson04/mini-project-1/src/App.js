import React, { Component } from "react";
import Title from "./componetns/Title";
import Control from "./componetns/Control";
import ListStudents from "./componetns/ListStudents";
import Form from "./componetns/Form";

export default class App extends Component {
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
    };
  }
  nhanData = (data) =>{
    this.setState({students:[...this.state.students,data]})
  }
  render() {
    let { students } =this.state;
    return (
      <div className="row">
        <Title />
        <Control />
        <ListStudents renderStundents ={students}  />
        <Form sendData={this.nhanData}/>
      </div>
    );
  }
}
