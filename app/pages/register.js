// pages/register.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', formData);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
