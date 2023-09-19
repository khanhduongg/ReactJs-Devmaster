// import { UPDATE_ITEM, DELETE_ITEM, BUY_ITEM } from "../constants/actionTypes";
// Sử dụng các chức năng trong giỏ hàng : buuy,update,delete
import { BUY_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../constants/actionTypes";
//sử dụng localStrorage
import { LOCAL_STROGAE_NAME } from "../constants/localStrorageName";
// khởi tạo state quản lý giỏ hàng
//khởi tạo dữ liệu (old state)
let initState = [];
//kiểm tra xem mua lần đầu tiên hay mua thêm
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STROGAE_NAME));
initState =
  shoppingCartLocal != null && shoppingCartLocal.legth >= 0
    ? shoppingCartLocal
    : [];
const getIndexByProduct = (list, product) => {
  for (let index = 0; index < list.length; index++) {
    if (list[index].product.productId === product.productId) {
      return index;
    }
  }
  return -1;
};
//tạo reducer
const cart = (state = initState, action) => {
  // lấy sản phẩm , số lượng từ action
  let { product, quantity } = action;
  let item = { product, quantity };
  // biến quản lý chức năng mua (mua mới,mua thêm)
  let index = -1; //giả định sản phẩm mua mới

  // tùy theo chức năng (type )để xác định mua hàng , cập nhật , xóa
  switch (action.type) {
    case BUY_ITEM: // mua hàng
      if (state.length === 0) {
        state.push(item);
      } else {
        index = getIndexByProduct(state, product);
        if (index >= 0) {
          state[index].quantity =
            parseInt(state[index].quantity) + parseInt(quantity);
        } else {
          // nếu sản  phẩm mua là mới chưa có trong giỏ hàng
          state.push(item);
        }
      }
      // cập nhật lại localStrorage
      localStorage.setItem(LOCAL_STROGAE_NAME, JSON.stringify(state));
      return [...state];
    case UPDATE_ITEM: // cập nhật giỏ hàng
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state[index].quantity = parseInt(item.quantity);
      }

      localStorage.setItem(LOCAL_STROGAE_NAME, JSON.stringify(state));
      return [...state];
    default:
      return state;
    case DELETE_ITEM: // xóa sản phẩm
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state.splice(index, 1);
      }
      localStorage.setItem(LOCAL_STROGAE_NAME, JSON.stringify(state));
      return [...state];
  }
};
export default cart;
