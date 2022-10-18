import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>This is home</h2>
            <p>{user.email}</p>
        </div>
    );
};

export default Home;