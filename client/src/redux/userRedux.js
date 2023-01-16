import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        current_user: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.current_user = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.error = action.payload;
        }
    }

});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
