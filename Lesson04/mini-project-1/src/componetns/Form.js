import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: "",
      sex: true,
      birthDate: "",
      birthPlace: "",
      address: "",
    };
  }
  handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  handleGetSex = (event) => {
    var sex =event.target.value

    if(sex === 'Nam' ){

        this.setState({sex: true})
    }else{
        this.setState({sex: false})

    }
  };
  handleGetbirthPlace = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
      event.preventDefault();
      this.props.sendData(this.state)

  };
  render() {
    return (
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample" onSubmit={this.onSubmit}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="studentId"
                    value={this.state.studentId}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="studentName"
                    value={this.state.studentName}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select className="form-control" onChange={this.handleGetSex}>
                    <option value={"Nam"}>Nam</option>
                    <option value={"Nữ"}>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    name="birthDate"
                    value={this.state.birthDate}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                  name="birthPlace"
                    className="form-control"
                    onChange={this.handleGetbirthPlace}
                  >
                    <option value={"Hà Nội"}>Hà Nội</option>
                    <option value={"TP. Hồ Chí Minh"}>TP. Hồ Chí Minh</option>
                    <option value={"Đà Nẵng"}>Đà Nẵng</option>
                    <option value={"Quảng Ninh"}>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    className="form-control"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
