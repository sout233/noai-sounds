'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client'; 

export default function RegisterForm() {
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(`❌ ${error.message}`);
    } else {
      setMessage('✅ 注册成功，请查收验证邮件');
    }
  };

  return (
    <div className="space-y-4">
      <input
        className="input"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn" onClick={handleRegister}>注册</button>
      <p>{message}</p>
    </div>
  );
}
