import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(logOut)
    const handleSignOut = () =>{
        logOut()
        .then(() =>{})
        .catch((error) => {
            console.error(error)
        })

    }
    return (
        <div>
          <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl"  to='/orders'>Orders</Link>
                
               
                { user?.email && <p>{user.email}</p>}
               { 
               user?.uid ? 
                <button onClick={ handleSignOut} className='btn btn-sm'>Sign Out</button>
                :
                <div>
                     <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                </div>
               
            }
             
         </div>
        </div>
    );
};

export default Header;