import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Stock from './components/Stock';
import SearchWeather from './components/SearchWeather';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />

          {/* Authorized user can able to access dashboard page via Route */}
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Authorized user can able to access stock page via Route */}
          <Route path='/stock' element={<ProtectedRoute><Stock/></ProtectedRoute>} />

          {/* Authorized user can able to access Weather page via Route */}
          <Route path='/searchweather' element={<ProtectedRoute><SearchWeather/></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
