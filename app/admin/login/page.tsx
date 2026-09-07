'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('futureedgedata.institute@gmail.com')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  async function submit(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError('')
    const { error } = await createClient().auth.signInWithPassword({ email, password })
    if (error) setError('Invalid email or password.')
    else if (email.toLowerCase() !== 'futureedgedata.institute@gmail.com') { await createClient().auth.signOut(); setError('This account is not authorized.') }
    else router.replace('/admin/submissions')
    setBusy(false)
  }
  return <main className="admin-shell"><section className="admin-login"><span className="label"><i />Admin portal</span><h1>Contact submissions</h1><p>Sign in to review and download inquiries from Future Edge Data Institute.</p><form onSubmit={submit} className="admin-form"><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>{error && <p className="admin-error" role="alert">{error}</p>}<button className="button button-primary" disabled={busy}>{busy ? 'Signing in...' : 'Sign in securely'}</button></form></section></main>
}
