import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from './../../firebase/firebase.init';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem('balance');
    return stored ? JSON.parse(stored) : 1000000;
  });

  const [paidBills, setPaidBills] = useState(() => {
    const stored = localStorage.getItem('paidBills');
    return stored ? JSON.parse(stored) : [];
  });

  const [paidBillsDetails, setPaidBillsDetails] = useState(() => {
    const stored = localStorage.getItem('paidBillsDetails');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify(balance));
  }, [balance]);

  useEffect(() => {
    localStorage.setItem('paidBills', JSON.stringify(paidBills));
  }, [paidBills]);

  useEffect(() => {
    localStorage.setItem('paidBillsDetails', JSON.stringify(paidBillsDetails));
  }, [paidBillsDetails]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
    return userCredential;
  };

  const register = async ({ name, email, photoURL, password }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: name,
      photoURL: photoURL || 'https://i.postimg.cc/NM8HM3G0/images.png',
    });

    setUser({
      ...userCredential.user,
      displayName: name,
      photoURL: photoURL || 'https://i.postimg.cc/NM8HM3G0/images.png',
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
    setBalance(1000000);
    setPaidBills([]);
    setPaidBillsDetails([]);
    localStorage.clear();
  };

  const updateBalance = (amount) => {
    setBalance((prev) => prev - amount);
  };

  const markBillAsPaid = (billType) => {
    setPaidBills((prev) => [...new Set([...prev, billType])]);
  };

  const hasPaidBill = (billType) => paidBills.includes(billType);

  const addBillDetails = (details) => {
    setPaidBillsDetails((prev) => [...prev, details]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        balance,
        login,
        register,
        logout,
        googleSignIn,
        loading,
        updateBalance,
        markBillAsPaid,
        hasPaidBill,
        paidBillsDetails,
        addBillDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};