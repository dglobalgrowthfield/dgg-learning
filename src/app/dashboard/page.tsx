'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://dgg-learning.supabase.co', 'sb_publishable_mbsmfusb90CMebMCpb6-Tw_QlkpzZDK');

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [tier, setTier] = useState('Basic');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) {
        supabase.from('users').select('tier,progress').eq('id', data.user.id).single()
          .then(({ data }) => {
            if (data) { setTier(data.tier || 'Basic'); setProgress(data.progress || 0); }
          });
      }
    });
  }, []);

  if (!user) return <div className="text-center mt-20"><a href="/api/auth/signin" className="bg-rebeccapurple text-white px-8 py-4 rounded">Sign In</a></div>;

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8">Welcome back!</h1>
        <p className="text-2xl mb-6">Your Plan: <strong className="text-rebeccapurple">{tier}</strong></p>
        <div className="w-full bg-gray-200 rounded-full h-6">
          <div className="bg-rebeccapurple h-6 rounded-full text-white text-center" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      </div>
    </main>
  );
}