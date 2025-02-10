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
import axios from "axios";
import { url } from "../../utils/fetchurl";

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
      setUser(user);
      if (user?.email) {
        const userEmail = { email: user.email };
        axios
          .post(`${url}/jwt`, userEmail, {
            withCredentials: true,
          })
          .then((result) => console.log(result.data.message))
          .catch((error) => console.log(error));
      } else {
        axios
          .post(
            `${url}/logout`,
            {},
            {
              withCredentials: true,
            }
          )
          .then((result) => console.log(result.data))
          .catch((error) => console.log(error));
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
