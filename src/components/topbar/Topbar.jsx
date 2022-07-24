import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import './topbar.css';

function Topbar(props) {
    const { user, logout } = UserAuth();
  const navigate = useNavigate();

  // Handle log out from the auth context
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>{user && user.email}</span>
                </div>
                <div className="topRight">
                <button onClick={handleLogout} className='border px-6 py-2 my-4'>
                Logout
                </button>
                </div>
            </div>
        </div>
    );
}

export default Topbar;