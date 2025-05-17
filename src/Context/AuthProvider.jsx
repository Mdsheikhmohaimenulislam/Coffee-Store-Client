import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const AuthProvider = ({ children }) => {

    // Create section
    const handleCreate = (email,password) => {
      return  createUserWithEmailAndPassword(auth,email,password)
    }


    // signin section
    const handleSignin = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password)
    }



    // Delete
    const handleDeleteAuth = () => {
      return deleteUser(auth.currentUser)
    }







  const userInfo = {

    handleDeleteAuth,
    handleCreate,
    handleSignin

  };

  return(
     <AuthContext value={userInfo}>
      {children}
      </AuthContext>
  );
};

export default AuthProvider;
