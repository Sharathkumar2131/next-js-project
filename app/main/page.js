// app/main/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function MainPage() {
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [token, router]);

  if (!token) {
    return null; // Do not render the page until redirecting
  }

  return (
    <div className="container">
      <h1>Welcome to the Main Page</h1>
      <p>You are logged in!</p>
    </div>
  );
}
