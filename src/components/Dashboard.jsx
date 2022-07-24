import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import './dashboard.css';
import Home from './sidebar/Home';

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
};

export default Dashboard;
