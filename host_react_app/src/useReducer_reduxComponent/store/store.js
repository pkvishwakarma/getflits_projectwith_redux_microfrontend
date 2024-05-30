import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import { useDispatch } from "react-redux";
import userReducer,{userinfo,isModify} from './features/userInfoSlicer/userinfoSlice';
import deliveryAddReducer,{addDeliveryAdd,isAddressAdded,updateDeliveryAdd,deleteDeliveryAdd} from "./features/deliveryAddDataSlicer/deliveryAddSlice";

const store =configureStore({
    reducer:({
        initialUserData:userReducer,
        deliveryData:deliveryAddReducer
    })
});
// console.log(store.getState())

export default store;
export const RootState = store.getState;
export const AppDispatch = store.dispatch;
export const useAppDispatch = () => AppDispatch=useDispatch;
export {userinfo,isModify,addDeliveryAdd,isAddressAdded,updateDeliveryAdd,deleteDeliveryAdd};