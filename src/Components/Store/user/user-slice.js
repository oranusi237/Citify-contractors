import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    userInfo: [],
    plan: null, // Add plan property to the initial state
  };
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setCurrentUser(state, action) {
        state.currentUser = action.payload;
      },
      setIsAuthenticated(state, action) {
        state.isAuthenticated = action.payload;
      },
      setUserInfo(state, action) {
        state.userInfo = action.payload;
      },
      setPlan(state, action) {
        state.plan = action.payload; // Add reducer to update plan
      },
    },
  });
  
  export const { setCurrentUser, setIsAuthenticated, setUserInfo, setPlan } = userSlice.actions;
  
  export const userReducer = userSlice.reducer;
  

