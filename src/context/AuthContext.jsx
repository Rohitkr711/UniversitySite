// import { createContext, useContext, useEffect, useState } from "react";
// import { authStateListener, getUserDoc } from "../firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);     // firebase user
//   const [userDoc, setUserDoc] = useState(null);             // firestore user document
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = authStateListener(async (user) => {
//       setCurrentUser(user);

//       // if logged in → fetch firestore doc
//       if (user) {
//         const doc = await getUserDoc(user.uid);
//         setUserDoc(doc);
//       } else {
//         setUserDoc(null);
//       }

//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, userDoc, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }


// ###_PART-2_###
// import { createContext, useContext, useEffect, useState } from "react";
// import { authStateListener, getUserDoc, logout } from "../firebase/auth";
// import { loginWithEmail, signupWithEmail } from "../firebase/auth";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Listen to firebase auth state
//   useEffect(() => {
//     const unsubscribe = authStateListener(async (user) => {
//       if (user) {
//         setCurrentUser(user);

//         // fetch Firestore user document
//         const doc = await getUserDoc(user.uid);

//         if (doc) {
//           setRole(doc.role);
//           setUserProfile(doc.profile);
//         }
//       } else {
//         setCurrentUser(null);
//         setRole(null);
//         setUserProfile(null);
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   // auth functions
//   const value = {
//     currentUser,
//     role,
//     userProfile,
//     loading,
//     login: loginWithEmail,
//     signup: signupWithEmail,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }


// PART-3
// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import {
  authStateListener,
  getUserDoc,
  logout as firebaseLogout,
  loginWithEmail,
  signupWithEmail,
} from "../firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userName, setUserName] = useState(null);

  const [role, setRole] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authStateListener(async (user) => {
      if (user) {
        setCurrentUser(user);

        const userData = await getUserDoc(user.uid);
        if (userData) {
          setRole(userData.role);
          setProfile(userData.profile);
          setUserName(userData.name); 
        }
      } else {
        setCurrentUser(null);
        setRole(null);
        setProfile(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    role,
    profile,
    userName,
    signup: signupWithEmail,
    login: loginWithEmail,
    logout: firebaseLogout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
