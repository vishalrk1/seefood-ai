// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { auth, firestore } from "../../firebase";
// import { User } from "../../Types";

// interface AuthState {
//   user: any | null;
//   status: string;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   status: "idle",
//   error: null,
// };

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async ({ email, password, name }: any, thunkAPI) => {
//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       const uid = user?.uid;
//       const UserData = {
//         uid,
//         name,
//         email,
//         credit: 6,
//       }
//       await firestore.collection("seefood-users").doc(uid).set(UserData);
//       return UserData;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async ({ email, password }: any, thunkAPI) => {
//     try {
//       const { user } = await auth.signInWithEmailAndPassword(email, password);
//       const doc = await firestore
//         .collection("seefood-users")
//         .doc(user?.uid)
//         .get();
//       if (doc.exists) {
//         console.log(doc.data() as User)
//         return doc.data() as User;
//       } else {
//         throw new Error("User profile not found");
//       }
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   "auth/logoutUser",
//   async (_, thunkAPI) => {
//     try {
//       await auth.signOut();
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     clearError(state) {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(logoutUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload;
//       })
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.status = "succeeded";
//         state.user = null;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload as string;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload as string;
//       })
//       .addCase(logoutUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { clearError } = authSlice.actions;
// export default authSlice.reducer;
