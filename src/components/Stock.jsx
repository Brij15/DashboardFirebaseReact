import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import './dashboard.css';
import CryptoList from './widgets/CryptoList';

const Stock = () => {

  return (
    <div className='dashboard'>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <CryptoList/>
      </div>
    </div>
  );
};

export default Stock;
