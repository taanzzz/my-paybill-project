import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from './../../firebase/firebase.init';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem('balance');
    return stored ? JSON.parse(stored) : 100000;
  });
  
  const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};


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
    setBalance(10000);
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
    <>
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
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={(context) => {
          const base = "flex items-start gap-3 shadow-lg rounded-xl px-5 py-4 border-l-4 animate-fade-in";
          const type = context?.type;

          switch (type) {
            case "success":
              return `${base} bg-green-100 border-green-500 text-green-800`;
            case "error":
              return `${base} bg-red-100 border-red-500 text-red-800`;
            case "info":
              return `${base} bg-blue-100 border-blue-500 text-blue-800`;
            case "warning":
              return `${base} bg-yellow-100 border-yellow-500 text-yellow-800`;
            default:
              return `${base} bg-white border-gray-400 text-gray-800`;
          }
        }}
        bodyClassName="flex flex-col gap-1 text-sm font-medium"
        progressClassName="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-full"
      />
    </>
  );
};