import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Signup />
      {/* أو تسجيل الدخول */}
      {/* <Login /> */}
      {/* أو الصفحة الرئيسية */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
