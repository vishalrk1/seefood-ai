// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { firestore } from "../../firebase";
// import { User } from "../../Types";

// export const fetchUserProfile = createAsyncThunk(
//   "user/fetchUserProfile",
//   async (uid: string, thunkAPI) => {
//     try {
//       const doc = await firestore.collection("seefood-users").doc(uid).get();
//       if (doc.exists) {
//         return doc.data();
//       } else {
//         throw new Error("User profile not found");
//       }
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateUserProfile = createAsyncThunk(
//   "user/updateUserProfile",
//   async ({ uid, userProfile }: { uid: string; userProfile: User }, thunkAPI) => {
//     try {
//       await firestore.collection("seefood-users").doc(uid).update(userProfile);
//       return userProfile;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
