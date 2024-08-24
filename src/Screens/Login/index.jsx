import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup, signInWithEmailAndPassword } from '../../Firebase/FirebaseConfig';
import './Styles.scss';
import GoogleIcon from '@mui/icons-material/Google';
import Loader from '../../Components/Loader'; // Import the Loader component

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('authToken');
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleGoogleSignIn = async () => {
    setLoading(true); // Start loader
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem('authToken', result.user.refreshToken); 
      navigate('/home');
    } catch (error) {
      setError('Error signing in with Google');
      console.error('Error signing in with Google: ', error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('authToken', userCredential.user.refreshToken);
      navigate('/home');
    } catch (error) {
      setError('Error signing in with email and password');
      console.error('Error signing in with email and password: ', error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="auth-container">
      {loading && <Loader />} {/* Conditionally render loader */}
      <div className="auth-box">
        <h1 className="auth-title">Login</h1>
        {error && <p className="auth-error">{error}</p>}
        <form className="auth-form" onSubmit={handleEmailSignIn}>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email" 
              className="auth-input" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="auth-input" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="auth-footer">
          <p>Don't have an account? <button onClick={handleSignUpClick} className="auth-link-button">Sign Up</button></p>
          <button className="auth-google-button" onClick={handleGoogleSignIn}>
            <GoogleIcon style={{ marginRight: '10px' }} />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
