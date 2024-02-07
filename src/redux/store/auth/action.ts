import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, firestore } from "../../firebase";
import { User } from "../../Types";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, name }: any, thunkAPI) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const uid = user?.uid;
      const UserData = {
        uid,
        name,
        email,
        credit: 6,
      };
      await firestore.collection("seefood-users").doc(uid).set(UserData);
      return UserData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: any, thunkAPI) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      const doc = await firestore
        .collection("seefood-users")
        .doc(user?.uid)
        .get();
      if (doc.exists) {
        console.log(doc.data() as User);
        return doc.data() as User;
      } else {
        throw new Error("User profile not found");
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await auth.signOut();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (uid: string, thunkAPI) => {
    try {
      const doc = await firestore.collection("seefood-users").doc(uid).get();
      if (doc.exists) {
        return doc.data();
      } else {
        throw new Error("User profile not found");
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ uid, userProfile }: { uid: string; userProfile: User }, thunkAPI) => {
    try {
      await firestore.collection("seefood-users").doc(uid).update(userProfile);
      return userProfile;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
