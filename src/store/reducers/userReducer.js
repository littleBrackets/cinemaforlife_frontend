import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setAuthorisation: (state, actions) => {
      state.isAuthorised = actions.payload;
    },
  },
});

export const { setAuthorisation } = userReducer.actions;
export default userReducer.reducer;
