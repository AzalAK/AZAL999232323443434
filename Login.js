import React, { useState } from 'react';
import axios from 'axios'; // لتحميل البيانات إلى الخادم
import { useHistory } from 'react-router-dom'; // لإعادة التوجيه بعد تسجيل الدخول

const Login = () => {
  // حالات لتخزين القيم المدخلة
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // لاستخدام التوجيه بعد تسجيل الدخول

  // دالة لإرسال البيانات إلى الخادم
  const handleSubmit = async (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
    try {
      // إرسال طلب إلى الخادم
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      
      if (response.data.success) {
        // إذا كانت البيانات صحيحة، التوجيه إلى الصفحة الرئيسية
        history.push('/home');
      } else {
        alert('Invalid credentials'); // في حال كانت البيانات خاطئة
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
