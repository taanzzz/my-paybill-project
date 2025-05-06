import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const MyProfile = ({ user }) => {
  const { logout } = useContext(AuthContext);  

  if (!user) return null;

  const defaultPhoto = 'https://i.ibb.co/com/TBmxTvQ4/images.png';

  const handleLogout = () => {
    logout();  
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <img className="w-10 rounded-full" src={user.photoURL || defaultPhoto} alt="User" />
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
        <li><span>{user.displayName || 'Anonymous'}</span></li>
        <li><span>Balance: 10000 BDT</span></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default MyProfile;
