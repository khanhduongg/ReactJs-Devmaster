import React, { Component } from "react";

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
                productId: "",
                productName: "",
                quantity: 0,
                price: 0,
        }
    }
    componentWillMount=()=>{
        let { renderActionName,renderPhone } = this.props;
        if(renderActionName==="Close" ||renderActionName==="UPDATE"){
            this.setState({
                productId: renderPhone.productId,
                productName: renderPhone.productName,
                quantity: renderPhone.quantity,
                price: renderPhone.price,
            })
        }else{
            this.setState({
                productId: "",
                productName: "",
                quantity: 0,
                price: 0,
            })
        }
    }
    componentWillReceiveProps=(nextProps)=>{
        let { renderActionName,renderPhone } = nextProps;
        if(renderActionName==="Close" ||renderActionName==="UPDATE"){
            this.setState({
                productId: renderPhone.productId,
                productName: renderPhone.productName,
                quantity: renderPhone.quantity,
                price: renderPhone.price,
            })
        }else{
            this.setState({
                productId: "",
                productName: "",
                quantity: 0,
                price: 0,
            })
        }
    }
    handleChange = (ev)=>{
        let name =ev.target.name;
        let value = ev.target.value;  
        this.setState({
            [name]:value
        })
    }
    handleSumit = (ev)=>{
        ev.preventDefault();
        this.props.onSumit(false,this.state)
    }
  render() {
    let { renderActionName, } = this.props;
    return (
      <div>
        <h3 className="bg-danger m-0 py-2 px-3">Thông tin sản phẩm</h3>
        <form className="mt-2 px-3 form-sample" action="">
          <div
            className="d-flex mb-3 "
          >
            <label className="label" htmlFor="">
              ID
            </label>
            <input
              className="w-100"
              type="text"
              name="productId"
              placeholder="Product ID"
              id=""
              value={this.state.productId}
              onChange={this.handleChange}
            />
          </div>
          <div
            className="d-flex mb-3 "
          >
            <label className="label" htmlFor="">
              Name
            </label>
            <input
              className="w-100"
              type="text"
              placeholder="Product ID"
              id=""
              value={this.state.productName}
              name="productName"
              onChange={this.handleChange}

            />
          </div>
          <div
            className="d-flex mb-3 "
          >
            <label className="label" htmlFor="">
              Quantity
            </label>
            <input
              className="w-100"
              type="number"
              value={this.state.quantity}
              name="quantity"
              placeholder="Product ID"
              id=""
              onChange={this.handleChange}

            />
          </div>
          <div
            className="d-flex mb-3 "
          >
            <label className="label" htmlFor="">
              Price
            </label>
            <input
              className="w-100"
              type="number"
              value={this.state.price}
              name="price"
              placeholder="Product ID"
              id=""
              onChange={this.handleChange}

            />
          </div>
          <button className="btn btn-info w-25 mb-3" type="button"
          onClick={this.handleSumit}>
            {renderActionName}
          </button>
          <h4 className="mb-2 alert alert-info m-0 py-2 px-3">
            Hệ thống đã sẵn sàng ...
          </h4>
        </form>
      </div>
    );
  }
}
