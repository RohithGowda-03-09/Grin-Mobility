
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../../Firebase/FirebaseConfig';
import './Styles.scss';
import GoogleIcon from '@mui/icons-material/Google';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
      // Handle successful signup
      console.log('User signed up with Google');
    } catch (error) {
      console.error('Error signing up with Google: ', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Sign Up</h1>
        {/* <form className="auth-form">
          <div className="form-group">
            <input type="text" placeholder="Name" className="auth-input" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" className="auth-input" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" className="auth-input" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" className="auth-input" required />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form> */}
        <div className="auth-footer">
          <p>Already have an account? <button onClick={handleLoginClick} className="auth-link-button">Login</button></p>
          <button className="auth-google-button" onClick={handleGoogleSignUp}>
            <GoogleIcon style={{ marginRight: '10px' }} />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;



