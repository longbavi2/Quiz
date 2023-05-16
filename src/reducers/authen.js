const initValue = false;
const authenReducer = (state=initValue,action)=>{
    if(action.type ==="CHECK_AUTHEN" && action.status !== state){
        return action.status;
    }else{
        return !state;
    }
}
export default authenReducer;