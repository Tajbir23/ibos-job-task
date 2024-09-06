/* eslint-disable react/prop-types */

import { createUserWithEmailAndPassword, GoogleAuthProvider, OAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [cartData, setCartData] = useState([]);

    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name) => {
        setLoading(true)
        const data = updateProfile(auth.currentUser, {
            displayName: name
        })
        return data
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            if(user){
                setUser(user);
                console.log(user);
                setLoading(false)
                return user
            }
        })
        .catch((error) => {
            setLoading(false)
            console.log(error);
        })
    }

    const signInWithApple = () => {
        const provider = new OAuthProvider('apple.com')
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user)
            setLoading(false)
            return user
        })
        .catch((error) => {
            console.log(error);
        })
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(currentUser)
                console.log(currentUser);
                setLoading(false)
            }else{
                setUser(null)
                setLoading(false)
            }
        })
        return () => {
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        setUser,
        loading,
        createUserWithEmail,
        signInWithEmail,
        updateUserProfile,
        logOut,
        signInWithGoogle,
        signInWithApple,
        cartData,
        setCartData,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider