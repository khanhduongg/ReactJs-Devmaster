import React, { Component } from 'react'

export default class Phone extends Component {
    // handleView= (phone)=>{
    //     this.props.onHandleView(true,"Close" ,phone);
    // }
    hanleEditorView = (phone,actionName)=>{
        this.props.onhanleEditorView(true,actionName,phone);
    }
  render() {
      let{renderPhone ,stt}=this.props;
    return (
        <>
        <tr className="border-1">
              <td>{stt}</td>
              <td>{renderPhone.productId}</td>
              <td>{renderPhone.productName}</td>
              <td>{renderPhone.quantity}</td>
              <td>{renderPhone.price}</td>
              <td>$ 15000</td>
              <td>
                <button type="button" className="btn btn-warning btn-icon-text"
                onClick={()=>this.hanleEditorView(renderPhone,"Close")}>
                  Xem
                </button>
                <button type="button" className="btn btn-dark btn-icon-text"
                onClick={()=>this.hanleEditorView(renderPhone,"UPDATE")}>
                  Sửa
                </button>
                <button type="button" className="btn btn-danger btn-icon-text">
                  Xóa
                </button>
              </td>
            </tr>
        </>
    
    )
  }
}
