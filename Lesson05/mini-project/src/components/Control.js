import React, { Component } from "react";
class Control extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword:'',
      sortBy:''
    }
  }
  handleAdd = ()=>{
    this.props.onAddOrEditView(true,"Save")
  }
  handleSearch = ()=>{
    this.props.onSearch(this.state.keyword)
  }
  handleSort = (ev)=>{
    let value = ev.target.value;
    this.setState({
      sortBy:value,
    })
    this.props.onSort(value)
  }
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button type="button" className="btn btn-primary btn-icon-text"
            onClick={this.handleAdd}
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6 ">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                value={this.state.keyword}
                onChange={(ev)=>this.setState({keyword:ev.target.value})}
              />
              <button className="btn btn-primary btn-icon-text"
              onClick={this.handleSearch}>
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" name="sortBy" value={this.state.sortBy} onChange={this.handleSort} >
              <option value="StudentName-ASC">StudentName-ASC</option>
              <option value="StudentName-DESC">StudentName-DESC</option>
              <option value="age-ASC">age-ASC</option>
              <option value="age-DESC">age-DESC</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
