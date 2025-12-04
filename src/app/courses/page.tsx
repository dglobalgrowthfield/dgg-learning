'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://dgg-learning.supabase.co', 'sb_publishable_mbsmfusb90CMebMCpb6-Tw_QlkpzZDK');

export default function Courses() {
  const [submission, setSubmission] = useState({ course: '', assignment: '', file: null as File | null });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert('Log in first');
    const filePath = `${user.id}/${Date.now()}-assignment.${submission.file?.name.split('.').pop()}`;
    await supabase.storage.from('assignments').upload(filePath, submission.file!);
    await supabase.from('submissions').insert({ user_id: user.id, course: submission.course, assignment: submission.assignment, file_url: filePath });
    alert('Submitted! Timestamped.');
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Course Modules</h1>
        {/* Example YouTube Lesson Embed - Exact feature */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-bold mb-4">Lesson 1: Digital Literacy</h3>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sample Lesson" frameBorder="0" allowFullScreen className="rounded"></iframe>
          <p className="mt-4 text-gray-600">Watch, practice, and submit assignment below.</p>
        </div>

        {/* Assignment Form - Exact fields/functions */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Assignment Submission</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Course (e.g., Digital Literacy)" value={submission.course} onChange={e => setSubmission({...submission, course: e.target.value})} className="w-full p-3 border rounded" required />
            <textarea placeholder="Assignment Description/Instructions Followed" value={submission.assignment} onChange={e => setSubmission({...submission, assignment: e.target.value})} className="w-full p-3 border rounded" rows={3} required />
            <input type="file" accept=".zip,.doc,.pdf,.js" onChange={e => setSubmission({...submission, file: e.target.files?.[0] || null})} className="w-full p-3 border rounded" required />
            <button type="submit" disabled={loading} className="w-full bg-rebeccapurple text-white py-3 rounded font-bold">
              {loading ? 'Submitting...' : 'Submit Work for Feedback'}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">Files (code, docs, zip) auto-timestamped. Due dates & feedback coming soon.</p>
        </div>
      </div>
    </main>
  );
}