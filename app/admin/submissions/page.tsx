import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import SubmissionsDashboard from './submissions-dashboard'

const ADMIN_EMAIL = 'futureedgedata.institute@gmail.com'
export default async function SubmissionsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')
  if (user.email?.toLowerCase() !== ADMIN_EMAIL) redirect('/admin/login?unauthorized=1')
  const { data, error } = await supabase.from('contact_submissions').select('id, full_name, email, phone, interest, message, created_at').order('created_at', { ascending: false })
  return <SubmissionsDashboard initialRows={data ?? []} initialError={error?.message ?? null} />
}
