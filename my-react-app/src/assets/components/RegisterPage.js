import React from 'react';
import { useState } from "react";
import '../styles/regPage.css'; // Import your CSS file for styling
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { useRegistrationContext } from './RegistrationContext';

function RegisterPage() {
  const { setRegistrationData } = useRegistrationContext();
  const navigate =useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    skills: []
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      // Handle checkbox input (skills)
      const skills = checked
        ? [...inputs.skills, value]
        : inputs.skills.filter(skill => skill !== value);
      setInputs(values => ({ ...values, skills }));
    } else {
      // Handle other inputs
      setInputs(values => ({ ...values, [name]: value }));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate registration success
    const userData = {
        
        username: inputs.username,
        age: inputs.age,
        // Add more fields as needed
    };
    // Store registration data in context
    setRegistrationData(userData);
    // Navigate to SuccessRegistration page
    navigate('/successRegistration');
}

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username} 
          onChange={handleChange}
          required
        />
      </label><br/>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age} 
          onChange={handleChange}
          required
        />
      </label><br/>
      <label>Enter your email:
        <input 
          type="email" 
          name="email" 
          value={inputs.email} 
          onChange={handleChange}
          required
        />
      </label><br/>
      <label>Select your gender:
        <select 
          name="gender" 
          value={inputs.gender} 
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label><br/>
      <fieldset>
        <legend>Select your skills:</legend>
        <label><input 
          type="checkbox" 
          name="skills" 
          value="java" 
          checked={inputs.skills.includes('java')} 
          onChange={handleChange}
        /> Java</label><br/>
        <label><input 
          type="checkbox" 
          name="skills" 
          value="web" 
          checked={inputs.skills.includes('web')} 
          onChange={handleChange}
        /> Web Development</label><br/>
        <label><input 
          type="checkbox" 
          name="skills" 
          value="python" 
          checked={inputs.skills.includes('python')} 
          onChange={handleChange}
        /> Python</label><br/>
      </fieldset><br/>
      <input type="submit" value="Register" />
      
    </form>
  );
}

export default RegisterPage;
