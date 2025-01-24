import AuthContext from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import Loading from "../Components/Atoms/Loading";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth);
    setUser(null);
  };

  if (loading) {
    return <Loading />;
  }

  const userInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signInUser,
    googleProvider,
    facebookProvider,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
