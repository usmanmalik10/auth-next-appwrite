'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const onLogin = async () => {};
  return (
    <div
      className="flex flex-col items-center justify-center
     min-h-screen py-2"
    >
      <h1>Login</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline focus:border-gray-600"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline focus:border-gray-600"
        onClick={onLogin}
      >
        Login Here
      </button>
      <Link href="/signup">visit singup page</Link>
    </div>
  );
}
