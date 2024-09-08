// pages/login.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login', formData);
      dispatch(loginSuccess({ token: data.token }));
      router.push('/main');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
