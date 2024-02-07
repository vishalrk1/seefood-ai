// import { createReducer } from "@reduxjs/toolkit";
// import { fetchUserProfile } from "./action";

// interface UserState {
//   user: any | null;
//   status: string;
//   error: string | null;
// }

// const initialState: UserState = {
//   user: null,
//   status: "idle",
//   error: null,
// };

// const userReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(fetchUserProfile.pending, (state) => {
//       state.status = "loading";
//       state.error = null;
//     })
//     .addCase(fetchUserProfile.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.user = action.payload;
//     })
//     .addCase(fetchUserProfile.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.payload as string;
//     });
// });

// export default userReducer;
