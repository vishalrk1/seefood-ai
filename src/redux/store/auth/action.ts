import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, firestore, googleProvider } from "../../firebase";
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
        recipes: [],
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
      localStorage.removeItem("persist:root");
      window.location.reload();
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
  async (
    { uid, userProfile }: { uid: string; userProfile: User },
    thunkAPI
  ) => {
    try {
      await firestore.collection("seefood-users").doc(uid).update(userProfile);
      return userProfile;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, thunkAPI) => {
    try {
      const { user } = await auth.signInWithPopup(googleProvider);
      const userData = {
        uid: user?.uid,
        name: user?.displayName,
        email: user?.email,
        credit: 6,
        recipes: [],
      };
      const userRef = await firestore
        .collection("seefood-users")
        .doc(userData.uid)
        .get();
      if (!userRef.exists) {
        await firestore
          .collection("seefood-users")
          .doc(userData.uid)
          .set(userData);
      }
      return userData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInWithGoogle = createAsyncThunk(
  "auth/logInWithGoogle",
  async (_, thunkAPI) => {
    try {
      const { user } = await auth.signInWithPopup(googleProvider);
      const doc = await firestore
        .collection("seefood-users")
        .doc(user?.uid)
        .get();
      if (doc.exists) {
        return doc.data() as User;
      } else {
        throw new Error("User profile not found");
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
