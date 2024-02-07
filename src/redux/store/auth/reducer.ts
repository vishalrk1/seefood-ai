import { createReducer } from "@reduxjs/toolkit";
import {
  fetchUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "./action";

interface AuthState {
  user: any | null;
  status: string;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder

    // fetching state
    .addCase(registerUser.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(loginUser.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(logoutUser.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchUserProfile.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(updateUserProfile.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })

    // call suces state
    .addCase(registerUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.status = "succeeded";
      state.user = null;
    })
    .addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    })
    .addCase(updateUserProfile.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    })

    // rejected state
    .addCase(registerUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    })
    .addCase(logoutUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    })
    .addCase(fetchUserProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    })
    .addCase(updateUserProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });
});

export default authReducer;
