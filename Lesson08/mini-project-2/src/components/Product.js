import React, { Component } from "react";
import { MSG_BUY_SUCCESS } from "../constants/messages";
import { connect } from "react-redux";
import { act_buy_item, act_change_notifyy } from "../actions";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  // hàm xử lý sự kiện mua hàng
  hanldeBuy = (product) => {
    //thực hiện mua hàng :
    this.props.buyItem(product, this.state.quantity);
    //thực hiện thông báo
    this.props.changeNotify(MSG_BUY_SUCCESS);
  };
  render() {
    let { product } = this.props;
    let element = <span className="price">{product.price} USD</span>;
    if (product.quantity !== 0) {
      element = (
        <>
          <input
            name="quantity-product-1"
            type="number"
            defaultValue={product.quantity}
            min={1}
            value={this.state.quantity}
            onChange={(ev) => this.setState({ quantity: ev.target.value })}
          />
          <button
            data-product={1}
            className="btn btn-success"
            onClick={() => this.hanldeBuy(product)}
          >
            Mua hàng
          </button>
          <a data-product={1} className="price">
            {" "}
            {product.price}${" "}
          </a>
        </>
      );
    }
    return (
      <div className="media product">
        <div className="media-left">
          <a>
            <img
              className="media-object"
              src={`images/${product.image}`}
              alt="charmander"
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{product.productName}</h4>
          <p>{product.descriptions}</p>
          {element}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // bắn action mua hàng đến reducer
    buyItem: (product, quantity) => {
      dispatch(act_buy_item(product, quantity));
    },
    changeNotify: (content) => {
      dispatch(act_change_notifyy(content));
    },
  };
};
export default connect(null, mapDispatchToProps)(Product);
