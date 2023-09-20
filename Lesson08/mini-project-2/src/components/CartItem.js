import React, { Component } from "react";
import { MSG_DELETE_SUCCESS } from "../constants/messages";
import { connect } from "react-redux";
import { act_changed_notify, act_delete_item } from "../actions";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  handleDelete = (product) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm ra giỏ hàng không ?"))
      this.props.deleteItem(product);
    this.props.changeNotify(MSG_DELETE_SUCCESS);
  };
  render() {
    let { renderCart, rollNo } = this.props;
    let quantity =
      this.state.quantity === 0 ? renderCart.quantity : this.state.quantity;
    return (
      <tr>
        <th scope="row">{rollNo}</th>
        <td>{renderCart.product.productName}</td>
        <td>{renderCart.product.price} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={quantity}
            min={1}
            onChange={(event) =>
              this.setState({ quantity: event.target.value })
            }
          />
        </td>
        <td>
          <strong>{renderCart.product.price * quantity} USD</strong>
        </td>
        <td>
          <a className="label label-info update-cart-item" data-product="">
            Update
          </a>
          <a
            className="label label-danger delete-cart-item"
            data-product=""
            onClick={() => this.handleDelete(renderCart.product)}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem:(product)=>{
      dispatch(act_delete_item(product))
    },
    changeNotify: (content) => {
      dispatch(act_changed_notify(content));
    },
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
