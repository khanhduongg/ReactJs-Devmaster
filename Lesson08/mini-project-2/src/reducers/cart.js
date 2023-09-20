import { UPDATE_ITEM, DELETE_ITEM, BUY_ITEM } from "../constants/actionTypes";
// sử dụng localStorage
import { LOCAL_STRORAGE_NAME } from "../constants/localStrorageName";
//khởi tạo dữ liệu (old state)
// tạo state quản lý giỏ hàng
let initState = [];
//kiểm tra xem mua lần đầu tiên hay mua thêm
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STRORAGE_NAME));
initState =
  shoppingCartLocal != null && shoppingCartLocal.length >= 0
    ? shoppingCartLocal
    : [];

//tạo reducer
const getIndexByProduct = (list, product) => {
  for (let index = 0; index < list.length; index++) {
    if (list[index].product.productID === product.productID) {
      return index;
    }
  }
  return -1;
};
const cart = (state = initState, action) => {
  // lấy sản phẩm từ action
  let { product, quantity } = action;
  let item = { product, quantity };
  // biển quản lý
  let index = -1;
  switch (action.type) {
    case BUY_ITEM:
      if (state.length === 0) {
        state.push(item);
      } else {
        index = getIndexByProduct(state, product);
        if (index >= 0) {
          // nếu là  sản phẩm mua đã có trong giỏ hàng , thực hiện cập nhật số lượng
          state[index].quantity =
            parseInt(state[index].quantity) + parseInt(quantity);
        }else{
          state.push(item);
        }
      }
      localStorage.setItem(LOCAL_STRORAGE_NAME,JSON.stringify(state));
      return [...state];
      case DELETE_ITEM :
        index =getIndexByProduct (state,product);
        if(index >= 0){
          state.splice(index,1);
        }
        localStorage.setItem(LOCAL_STRORAGE_NAME,JSON.stringify(state));
        return [...state];
  }
  return state;
};
export default cart;
