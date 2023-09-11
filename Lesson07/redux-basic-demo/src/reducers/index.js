import * as types from "../constants";
const initialSate = {
  userName: "Redux-Demo",
  courseName: "Redux-ReactJS",
};
const rootReducer = (state = initialSate, action) => {
  switch (action.type) {
    case types.CHANGE_USERNAME:
      return {
        ...state,
        userName: action.data,
      };
    case types.CHANGE_COURSSENAME:
      return {
        ...state,
        courseName: action.data,
      };
    default:
      return state;
  }
};
export default rootReducer;
