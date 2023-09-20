import { UPDATE_ITEM, DELETE_ITEM, BUY_ITEM } from "../constants/actionTypes";
import { CHANGE_NOTIFY, MSG_LOAD_SUCCESS } from "../constants/messages";
import * as mess from"../constants/messages"
const initState = mess.MSG_LOAD_SUCCESS
//khởi tạo dữ liệu (old state)

//tạo reducer
const notify = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_NOTIFY:
          state = action.payload
      return state;
    default:
      return state;
  }
};
export default notify;
