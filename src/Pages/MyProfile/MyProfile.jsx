import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyProfile = () => {
  const { user, logout, balance } = useContext(AuthContext); 

  if (!user) return null; 

  const defaultPhoto = 'https://i.postimg.cc/NM8HM3G0/images.png';

  const handleLogout = async () => {
  try {
    await logout();
    toast.success('👋 Successfully logged out!');

  } catch (err) {
    console.error(err);
    toast.error('⚠️ Failed to logout!');
  }
};


  return (
    <>
    <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <img className="w-10 rounded-full" src={user.photoURL || defaultPhoto} alt="User" />
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
    <li>
      <span
        onClick={() => toast.info(`👤 Logged in as ${user.displayName || 'Anonymous'}`)}
        className="cursor-pointer"
      >
        {user.displayName || 'Anonymous'}
      </span>
    </li>
    <li>
      <span onClick={() => toast.info(`💰 Your current balance is ${balance} BDT`)} className="cursor-pointer">
        Balance: {balance} BDT
      </span>
    </li>
    <li>
      <button onClick={handleLogout}>Logout</button>
    </li>
  </ul>
</div>

    </>
  );
};

export default MyProfile;
