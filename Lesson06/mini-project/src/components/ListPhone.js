import React, { Component } from "react";
import Phone from "./Phone";

export default class ListPhone extends Component {
    HandleEditorView=(toggle,actionName,phone)=>{
        this.props.onhanleEditorView(toggle,actionName,phone)
    }
  render() {
    let { renderPhones } = this.props;
    console.log("ListPhone",renderPhones)
    let elementPhone = renderPhones.map((phone,index) => {
      return <Phone key={index} renderPhone={phone} stt={index+1}
                 onhanleEditorView={this.HandleEditorView}/>;
    });
    return (
      <div>
        <table border={1} classname="table table-bordered ">
          <thead className="text-center bg-danger">
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {elementPhone}
          </tbody>
        </table>
      </div>
    );
  }
}
