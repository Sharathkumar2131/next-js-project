// pages/main.js
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function MainPage() {
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  return (
    <div className="container">
      <h1>Welcome to the Main Page</h1>
      <p>You are logged in!</p>
    </div>
  );
}
