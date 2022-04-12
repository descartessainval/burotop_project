import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';

/*Container => pas intéressant pour moi*/

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
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
