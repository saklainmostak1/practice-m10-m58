import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading , setLoading] = useState(true)

    const provider = new GoogleAuthProvider()

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =() =>{
        return signOut(auth)
    }

    const googleLogIn = () =>{
      return  signInWithPopup(auth, provider)
    }
    useEffect(() =>{
  const unSubscribe  =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        } )
        return () => {
            unSubscribe()
        }
    }, [])
    

    const authInfo = {user, loading, createUser, signIn, logOut, googleLogIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;