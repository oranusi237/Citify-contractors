import { userReducer } from "./user/user-slice";
import { combineReducers } from "@reduxjs/toolkit";


export const RootReducer = combineReducers({
    user: userReducer,
})