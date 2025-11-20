// src/firebase/auth.js
import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function signupWithEmail(email, password, name, role = "student") {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // create user document for storing role + profile
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    name,
    role,
    createdAt: new Date().toISOString(),

    // initial profile data
    profile: {
      attendance: 0,
      feesDue: 0,
      course: "",
      department: "",
      subjects: [],
      marksheets: {},
    },
  });

  return user;
}

export async function loginWithEmail(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  return await signOut(auth);
}

export function authStateListener(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function getUserDoc(uid) {
  const userRef = doc(db, "users", uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) return null;
  return snap.data();
}
