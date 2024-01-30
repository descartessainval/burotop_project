import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import DashboardScreen from './components/screens/DashboardScreen';

/*Container => pas intéressant pour moi*/

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/dashboard' element={<DashboardScreen />} exact />
          <Route path='/login' element={<LoginScreen />} exact />
          <Route path='/register' element={<RegisterScreen />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
