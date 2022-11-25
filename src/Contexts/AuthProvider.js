import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext= createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

      //update Name
  const updateUserProfile = (userInfo) => {
    setLoading(true)
    return updateProfile(user,userInfo)
  }
    // google signin
    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
  
    // logout
    const logOut = () => {
      setLoading(true)
      //localStorage.removeItem('coolcar-token')
      return signOut(auth)
    }
  
    //login with password
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
  
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
       setLoading(false)
      })
  
      return () => {
        unsubscribe()
      }
    }, [])
  
    const authInfo = {
      user,
      createUser,
      logOut,
      signIn,
      updateUserProfile,
      signInWithGoogle,
      loading,
      setLoading,
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider >
  );
};

export default AuthProvider;