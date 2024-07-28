import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import HomePage from './components/Home/HomePage';
import SplashScreen from './SplashScreen';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // showing splash screen for 1 second
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }
  

  return (
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<HomePage /> } />
      </Routes>
  );
};

export default App;
