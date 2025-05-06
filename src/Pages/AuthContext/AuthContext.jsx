import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile} from 'firebase/auth';
import { auth } from './../../firebase/firebase.init';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
    return userCredential;
    } catch(error) {
      throw new Error(error.message);
    }
  };

  const register = async ({ name, email, photoURL, password }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
      displayName: name,
      photoURL: photoURL || 'https://i.ibb.co.com/TBmxTvQ4/images.png',
    });

    setUser({
      ...userCredential.user,
      displayName: name,
      photoURL: photoURL || 'https://i.ibb.co.com/TBmxTvQ4/images.png',
    });

    return userCredential;
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    return result.user;
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, googleSignIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
