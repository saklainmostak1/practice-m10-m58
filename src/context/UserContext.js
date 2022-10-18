import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
    const user = {email: "Nayan"}

    const authInfo = {user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;