// sử dụng các hằng
import * as types from "../constants/actionTypes";

// action cho chức năng hiển thị sản phẩm
export const act_list_product = () => {
  return {
    type: types.LIST_PRODUCT,
  };
};
// action - mua hàng
export const act_buy_item = (product, quantity) => {
  return {
    type: types.BUY_ITEM,
    product,
    quantity,
  };
};
export const act_delete_item = (product) => {
  return {
    type: types.DELETE_ITEM,
    product
  };
};
// action - cho chức năng thông báo
export const act_changed_notify = (content)=>{
  return {
    type:types.CHANGE_NOTIFY,
    payload:content
  }
}