import {createStore} from"redux";

const State ={
    userName :"Dương Dương",
    courseName :"Nguyễn Chí Hưởng"
}
const reducer = (state=State,action)=>{
    switch(action.type){
        case"CHANG_USER_NAME":
        state.userName=action.userNameNew
        break;
        case"CHANG_Course_NAME":
        state.courseName=action.userCourseNew
        break;
        default:
            return state;
    }
    return state;
}
const store = createStore(reducer);
console.log(store);
console.log("Initial State");
console.log(store.getState());
const changeUserName = ()=>{
    return{
        type:"CHANG_USER_NAME",
        userNameNew:"Nguyễn Đình Dương"
    }
}
store.dispatch(changeUserName());
console.log("Change userName");
console.log(store.getState());
const changeCourseName = ()=>{
    return{
        type:"CHANG_Course_NAME",
        userCourseNew:"Nguyễn Chi Huong"
    }
}
store.dispatch(changeCourseName());
console.log("changeCourseName");
console.log(store.getState());

export default reducer;