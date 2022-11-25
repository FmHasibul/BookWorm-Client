import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebse.config'



export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // user registration
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // googleLogin
    const googleProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //  profile update
    const userProfileInfo = (userData) => {
        return updateProfile(user, userData);
    }
    // log Out 
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (loginUser) => {
            setUser(loginUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        createNewUser,
        googleProvider,
        userProfileInfo,
        user,
        loading,
        logout,
        signIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;