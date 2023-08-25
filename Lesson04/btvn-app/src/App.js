import React, { Component } from 'react'
import ListStundent from './component/ListStudent';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20 },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21 },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19 },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 19 },
      ],
      arr:[
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20 },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21 },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19 },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 19 },
      ]
    }
  }
  nhanData = (data) =>{
    this.setState({
      arr: data
    })

  }
  render() {
    return (
      <div>
      <ListStundent 
        sendData={this.nhanData}
        arr={this.state.arr} 
        renderStudents={this.state.students} 
        
        ></ListStundent>
      </div>
    )
  }
}

