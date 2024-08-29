import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, provider, signInWithPopup, signInWithEmailAndPassword } from '../../Firebase/FirebaseConfig';
import './Styles.scss';
import GoogleIcon from '@mui/icons-material/Google';
import Loader from '../../Components/Loader'; // Ensure this points to your updated Loader component

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Extract the 'redirectTo' query parameter
  const queryParams = new URLSearchParams(location.search);
  const redirectTo = queryParams.get('redirectTo') || '/';

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('authToken');
    if (isLoggedIn) {
      navigate(redirectTo);
    }
  }, [navigate, redirectTo]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, 1 letter, and 1 number
    if (!password) {
      setPasswordError('Password is required');
      return false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters, including a number and a letter');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleInputChange = (setter, validator) => (e) => {
    const value = e.target.value;
    setter(value);
    validator(value);
  };

  useEffect(() => {
    setIsFormValid(!emailError && !passwordError && email && password);
  }, [emailError, passwordError, email, password]);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('authToken', userCredential.user.refreshToken);
      navigate(redirectTo);
    } catch (error) {
      setError('Error signing in with email and password');
      console.error('Error signing in with email and password: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem('authToken', result.user.refreshToken);
      navigate(redirectTo);
    } catch (error) {
      setError('Error signing in with Google');
      console.error('Error signing in with Google: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <>
      {loading && <Loader />} {/* Display loader when loading */}

      <div className="auth-container">
        <div className="auth-box">
          <h1 className="auth-title">Login</h1>
          {error && <p className="auth-error">{error}</p>}
          <form className="auth-form" onSubmit={handleEmailSignIn}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="auth-input"
                value={email}
                onChange={handleInputChange(setEmail, validateEmail)}
              />
              {emailError && <p className="input-error">{emailError}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                value={password}
                onChange={handleInputChange(setPassword, validatePassword)}
              />
              {passwordError && <p className="input-error">{passwordError}</p>}
            </div>
            <button type="submit" className="auth-button" disabled={!isFormValid}>
              Login
            </button>
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
    </>
  );
};

export default LoginPage;
