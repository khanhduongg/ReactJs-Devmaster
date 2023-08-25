import React, { Component } from 'react'

export default class ListStundent extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword:'',
            arr:[]
        }
    }
    onChange= (event) =>{
        let target=event.target;
        let name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        })
    }
    onSearch = () =>{
        let{renderStudents} = this.props;
        renderStudents.map(student =>{
            if(student.studentName.toLowerCase().includes(this.state.keyword.toLowerCase()))
            // if(this.state.keyword == student.studentName)
            {
                this.state.arr.push(student)
                console.log(this.state.arr)

            }
        })
        this.setState({arr:[]})
        this.props.sendData(this.state.arr)
        console.log(this.state.arr)
        
    }
  render() {
    let {keyword} =this.state.keyword;
    let{arr} = this.props;
    let elementStudent = arr.map((student,studentId)=>{
        return <>
                         
        <tr key={studentId + 1}>
            <td>{student.studentId}</td>
            <td>{student.studentName}</td>
            <td>{student.age}</td>
        </tr>
        </>
    })
    return (
      <div>
        <h2>Hiển thị dữ liệu lấy từ App</h2>
        <br></br>
        <div className="input-group">
            <input 
            value={keyword}
            onChange={this.onChange}
            name='keyword' 
            type="search" 
            className="w-50 "
            placeholder="Search" 
            aria-label="Search" 
            aria-describedby="search-addon" />
            <button
             type="button" 
             className="btn btn-outline-primary"
             onClick={this.onSearch}
             >search</button>
        </div>
        <table className='table table-broder'>
            <thead>
                <tr>
                    <th>studentId</th>
                    <th>studentName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            {elementStudent}
            </tbody>
        </table>
      </div>
    )
  }
}
