import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    user: {
      data: {}, // You can keep other user-related data here
      isLoggedIn: false,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user.data = action.payload;
      state.user.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = {
        data: {},
        isLoggedIn: false,
      };
    },
  },
});


export const { setUser, logoutUser } = counterSlice.actions;
export default counterSlice.reducer;
