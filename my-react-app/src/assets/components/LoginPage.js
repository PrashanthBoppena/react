import React, { useState, useEffect  } from "react";
import { FaUser, FaLock } from 'react-icons/fa';
import '../styles/loginPage.css';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { GoogleLogin } from '@react-oauth/google';
// Import JSON files dynamically
const langData = {
    'en': import('../languages/en.json'),
    'hi': import('../languages/hi.json'),
    'te': import('../languages/te.json')
};

function LoginPage(){
    const navigate= useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English ('en')
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState('');
    const [languageData, setLanguageData] = useState(null);

    // Load language data based on selected language
    useEffect(() => {
        langData[selectedLanguage].then(module => {
            setLanguageData(module.default);
        });
    }, [selectedLanguage]);

    const inputsHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hardcoded validation against admin/admin
        console.log(inputs.username);

        if (inputs.username === 'admin' && inputs.password === 'admin') {
            // Redirect to success page or any other action
            console.log('Login successful!!');
            navigate("/homePage");
        } else {
            setError(languageData.invalidCredentialsError);
        }
        setInputs({});
    }

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    if (!languageData) return null; // Wait until language data is loaded

    // Function to handle forgot password click
    const handleForgotPassword = () => {
      // Logic to handle forgot password action
      console.log('Forgot Password clicked');
      navigate("/forgot-password");

  };

  // Function to handle register click
  const handleRegister = () => {
      // Logic to handle register action
      console.log('Register clicked');
      
  };
  const handleLoginWithGoogle = () => {
    
    {console.log('sign in with google cliked')}
    const clientId = '1453990155-dcb8vc6lfmcmmjqto5v5t4u24g01k1j5.apps.googleusercontent.com'; // Replace with your actual Google OAuth client ID
    const clientSecret='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';
    const redirectUri = '/'; // Replace with your actual redirect URI configured in Google Cloud Console
    const scope = 'profile email'; // Adjust scopes as needed https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}&prompt=select_account`;
    
    //const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}&prompt=select_account`;
    
    //window.location.href = authUrl;

  };
   

    return (
        <div className="login-container">
            <div className="language-dropdown-container">
                <label htmlFor="language">Language:</label>
                <select
                    id="language"
                    name="language"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                >
                    <option value="en">English</option>
                    <option value="hi">हिंदी</option>
                    <option value="te">తెలుగు</option>
                </select>
            </div>
            <h2>{languageData.loginHeader}</h2>
            {error && <div className="error-message">{error}</div>}
            {/* <button className="google-btn" onClick={handleLoginWithGoogle}>Sign in with Google</button> 
            <GoogleLogin onSuccess={credentialResponse => {
                console.log(credentialResponse);
                }}
                onError={() => {
                console.log('Login Failed');
                }}
            /> */}
            <div className="or-divider">
                <span>or</span>
            </div>

            <form onSubmit={handleSubmit} method="POST" className="login-form">
                <div className="form-group">
                    <label htmlFor="username">
                        <FaUser /> {languageData.usernameLabel}
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={inputs.username || ""}
                        onChange={inputsHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        <FaLock /> {languageData.passwordLabel}
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={inputsHandler}
                        required
                    />
                </div>

                <button type="submit" className="login-btn">
                    {languageData.loginButton}
                </button>
            </form>
            {/* Forgot Password and Register links */}
            <div className="forgot-register-links">
                <span className="forgot-password" onClick={handleForgotPassword}>Forgot Password</span>
                <Link to="/register" className="register">Register</Link>
                
            </div>            
        </div>
    );
}



export default LoginPage;
