import React, { Component } from "react";
import Control from "./components/Control";
import ListPhone from "./components/ListPhone";
import Form from "./components/Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialStates: [
        {
          productId: "P001",
          productName: "IPhone 11",
          quantity: 15,
          price: 1000,
        },
        {
          productId: "P002",
          productName: "IPhone 12",
          quantity: 20,
          price: 1250,
        },
        {
          productId: "P001",
          productName: "IPhone 13",
          quantity: 10,
          price: 1500,
        },
        {
          productId: "P001",
          productName: "IPhone 14",
          quantity: 15,
          price: 2000,
        },
      ],
      isToggle: false,
      actionName: "",
      phone: {},
    };
  }
  hanleAddorEditView = (toggle, actionName, phone) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      phone: phone,
    });
  };
  handleSumit = (toggle, phone) => {
    this.setState({
      isToggle: toggle,
    });
    if (this.state.actionName === "SAVE") {
      let { initialStates } = this.state;
      initialStates.push(phone);
      this.setState({
        initialStates: initialStates,
      });
    } else if (this.state.actionName === "UPDATE") {
      let { initialStates } = this.state;
      for (let i = 0; i < initialStates.length; i++) {
        if (initialStates[i].productId === phone.productId) {
          initialStates[i] = phone;
          break;
        }
        this.setState({
          initialStates: initialStates,
        });
      }
    }
  };
  handleDelete = (phone) => {
    let { initialStates } = this.state;
    for (let i = 0; i < initialStates.length; i++) {
      if (initialStates[i].productId === phone.productId) {
        initialStates.splice(i, 1);
        break;
      }
    }
    // initialStates = this.state.initialStates.filter(x=>x.productId !== phone.productId);
    this.setState({
      initialStates: initialStates,
    });
  };
  render() {
    let { initialStates } = this.state;
    let elementForm =
      this.state.isToggle === true ? (
        <Form
          renderActionName={this.state.actionName}
          renderPhone={this.state.phone}
          onSumit={this.handleSumit}
        />
      ) : (
        ""
      );
    return (
      <div>
        <div className="border-3 border mx-4 my-3 py-4 row d-flex justify-content-around">
          <Control onAddorEditView={this.hanleAddorEditView} />
          <div className="col-6 justify-content-end d-flex">
            <ListPhone
              renderPhones={initialStates}
              onhanleEditorView={this.hanleAddorEditView}
              onDelete={this.handleDelete}
            />
          </div>
          <div className="col-6 border-1 border border px-0">{elementForm}</div>
        </div>
      </div>
    );
  }
}
