'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  if (!token) {
    return null; // Prevent rendering if not authenticated (during redirect)
  }

  // Content for authenticated users
  return (
    <div className="container">
      <h1>Welcome to the Next.js App</h1>
      <p>You are logged in!</p>
    </div>
  );
}
