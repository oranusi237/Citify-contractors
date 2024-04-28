import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    currentUser: null,
    isAuthenticated: false,
    userInfo: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState: InitialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
        },
        setIsAuthenticated(state, action) {
            state.isAuthenticated = action.payload
        }, setUserInfo(state, action) {
            state.userInfo = action.payload;
        }
    }
})

export const { setCurrentUser, setIsAuthenticated, setUserInfo } = userSlice.actions;

export const userReducer = userSlice.reducer;


