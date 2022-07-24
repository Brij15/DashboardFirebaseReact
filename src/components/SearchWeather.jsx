import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import './dashboard.css';
import WeatherMenu from './widgets/WeatherMenu';

const SearchWeather = () => {

  return (
    <div className='dashboard'>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <WeatherMenu/>
      </div>
    </div>
  );
};

export default SearchWeather;
