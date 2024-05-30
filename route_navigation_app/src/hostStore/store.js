import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

//Right now not using it as passing store in provider because its rendering in host application and store is already passed there..

/*
NOTE: 
Here you take the interface of each slice and pass them into the `useStoreSelector` Hook in this way your `intellisense` will be aware of the federated types.
*/
const federatedSlices = {
  initialUserData: import("hostreactapp/useReducer_reduxComponent/store/features/userInfoSlicer/userinfoSlice").then(
    (module) => module.default
  ),
};
console.log(federatedSlices);
const initStore =  () => {
  const store = configureStore({
    reducer:({
      ...federatedSlices,
    }),
  });
  return store;
};

export default initStore;