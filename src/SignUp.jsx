import React from "react"
import { useState } from "react";
const SignUp = ({role}) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'Patient' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  return (
    <form >
    <h2>{role} Signup</h2>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {success && <p style={{ color: 'green' }}>{success}</p>}
    <input
      type="text"
      placeholder="Name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      required
    />
    <input
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      required
    />
    <input
      type="password"
      placeholder="Password"
      value={formData.password}
      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      required
    />
    {/* <select
      value={formData.role}
      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
    >
      <option value="Patient">Patient</option>
      <option value="Doctor">Doctor</option>
    </select> */}
    <button type="submit">Signup</button>
  </form>
  )
};

export default SignUp;
