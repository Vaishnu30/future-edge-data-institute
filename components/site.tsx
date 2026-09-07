'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { ArrowRight, CalendarDays, CheckCircle2, ChevronDown, Clock3, Download, FileText, Mail, MapPin, Menu, Monitor, Phone, Send, Users, X } from 'lucide-react'


export const programs = [
  { title: 'Python for Data Analytics', weeks: '8 weeks', level: 'Beginner', description: 'Master Python, Pandas, NumPy, and data visualization libraries used in every analytics role.' },
  { title: 'SQL & Databases', weeks: '6 weeks', level: 'Beginner', description: 'Write complex queries, optimize databases, and work with real-world datasets.' },
  { title: 'Power BI & Tableau', weeks: '6 weeks', level: 'Intermediate', description: 'Build interactive dashboards and reports that drive business decisions.' },
  { title: 'Machine Learning', weeks: '10 weeks', level: 'Intermediate', description: 'Understand ML algorithms, build predictive models, and deploy solutions.' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const links = [{ href: '/', label: 'Home' }, { href: '/courses', label: 'Courses' }, { href: '/contact', label: 'Contact' }]
  return <header className="site-header"><div className="container nav-inner"><Link href="/" className="brand" aria-label="Future Edge Data Institute home"><span className="brand-mark">F</span><span>Future Edge</span></Link><nav className="desktop-nav">{links.map((link) => <Link key={link.href} href={link.href} className={pathname === link.href || (link.href === '/courses' && pathname.startsWith('/courses')) ? 'active' : ''}>{link.label}</Link>)}</nav><Link className="button button-primary enroll" href="/contact">Enroll Now</Link><button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <nav className="mobile-nav">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="button button-primary" href="/contact" onClick={() => setOpen(false)}>Enroll Now</Link></nav>}</header>
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-grid"><div><div className="footer-brand"><span className="brand-mark">F</span><span>Future Edge</span></div><p>Empowering fresh graduates to launch high-impact data careers through industry-aligned training and mentorship.</p><div className="socials"><span>in</span><span>◎</span><span>▶</span><span>𝕏</span></div></div><div><h3>Programs</h3><Link href="/courses/data-science-analytics">Data Science Program</Link><Link href="/courses">Python for Analytics</Link><Link href="/courses">SQL & Databases</Link><Link href="/courses">Power BI & Tableau</Link><Link href="/courses">Machine Learning</Link></div><div><h3>Institute</h3><Link href="/">About Us</Link><Link href="/">Success Stories</Link><Link href="/">Hiring Partners</Link><Link href="/contact">Contact</Link></div><div><h3>Get in Touch</h3><p className="footer-contact"><Mail /> futureedgedata.institute@gmail.com</p><p className="footer-contact"><Phone /> +91 8668962548</p><p className="footer-contact"><MapPin /> futureedgedatainstitute.in</p></div></div><div className="container footer-bottom"><span>© 2026 Future Edge Data Institute. All rights reserved.</span><span><Link href="/">Privacy Policy</Link><Link href="/">Terms of Use</Link></span></div></footer>
}

export function Label({ children }: { children: React.ReactNode }) { return <span className="label"><i />{children}</span> }
export function Button({ children, href = '#', secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) { return <Link href={href} className={`button ${secondary ? 'button-secondary' : 'button-primary'}`}>{children}<ArrowRight size={18} /></Link> }
export function GridHero({ label, title, description }: { label: string; title: string; description: string }) { return <section className="grid-hero"><div className="container centered"><Label>{label}</Label><h1>{title}</h1><p>{description}</p></div></section> }
export function GradientProgramCard({ detail = false }: { detail?: boolean }) { return <div className={`gradient-program ${detail ? 'detail-card' : ''}`}><div className="gradient-top"><div><span className="popular">Most Popular</span><h2>Data Science &amp; Analytics Program</h2><p>{detail ? 'The complete end-to-end program for serious career changers.' : 'Our flagship 6-month program covering the full data stack — from Python and SQL to machine learning and business intelligence. Built for fresh graduates who want to get hired fast.'}</p></div><div className="program-pills"><span><Clock3 /> 6 months</span><span><Monitor /> Online + Offline</span><span>⌁ &nbsp; Beginner to Advanced</span></div></div>{detail ? <div className="detail-bottom"><div><h3>About this program</h3><p>Our flagship 6-month program takes you from zero to job-ready. You&apos;ll master Python, SQL, statistics, machine learning, and BI tools — all while working on real datasets and building a portfolio that gets you hired.</p><Button href="/contact">Enroll in this program</Button></div><div><h3>Curriculum modules</h3><ul className="check-list">{['Python & Programming Fundamentals','Data Wrangling with Pandas & NumPy','SQL & Relational Databases','Statistics & Probability for Data Science','Data Visualization (Matplotlib, Seaborn)','Machine Learning Algorithms','Power BI & Tableau Dashboards','Capstone Project & Portfolio Review'].map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul></div></div> : <Button href="/courses/data-science-analytics" secondary>View Curriculum</Button>}</div> }
export function CourseCards() { return <div className="course-grid">{programs.slice(1).map((program) => <article className="course-card" key={program.title}><h3>{program.title}</h3><p>{program.description}</p><Link href="/courses">Learn more <ArrowRight size={16} /></Link></article>)}</div> }
export function StepCards() { const steps = [['01','Free Counselling','Book a 30-minute session with a mentor to map out the right program for your background and goals.'],['02','Enroll & Start','Choose your batch, complete enrollment, and get immediate access to the learning platform and community.'],['03','Learn & Build','Attend live sessions, work on real projects, and build a portfolio under mentor guidance.'],['04','Get Placed','Our placement cell connects you with hiring partners, preps you for interviews, and supports you until you land the role.']]; return <div className="four-grid">{steps.map(([number,title,copy]) => <article className="step-card" key={number}><strong>{number}</strong><h3>{title}</h3><p>{copy}</p></article>)}</div> }
export function Mentorship() { const items = [['Placement Support','Dedicated placement cell with resume reviews, mock interviews, and direct recruiter connections.'],['Industry Mentors','Learn from practitioners with 5–15 years of real-world data experience at top companies.'],['Live Projects','Work on real datasets and industry case studies that become portfolio pieces for your resume.'],['Flexible Batches','Morning, evening, and weekend batches designed around your schedule and commitments.']]; return <section className="section"><div className="container"><Label>Why Future Edge</Label><h2>Mentorship that goes beyond the classroom.</h2><p className="lead">We don&apos;t just teach — we guide you all the way to your first data job.</p><div className="four-grid">{items.map(([title,copy]) => <article className="mentor-card" key={title}><span className="teal-line" /><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section> }
export function Counselling({ compact = false }: { compact?: boolean }) { return <section className={`container ${compact ? 'compact-wrap' : ''}`}><div className="counselling"><h2>Not sure which program is right for you?</h2><p>Book a free 30-minute career counselling session. We&apos;ll help you pick the right path.</p><Button href="/contact" secondary>Book Free Counselling</Button></div></section> }
export function Brochure() { return <section className="aqua-band"><div className="container brochure"><div className="brochure-icon"><FileText size={48} /><span>PDF BROCHURE</span></div><div><Label>Free Download</Label><h2>Get Our Full Course Brochure</h2><p>Download our detailed brochure to explore the complete curriculum, batch schedules, fee structure, and placement support — everything you need to make an informed decision about your data career.</p><Button href="/contact">Download Brochure <Download size={17} /></Button><small>Free download · No sign-up required</small></div></div></section> }
export function Journey() { return <section className="container journey-wrap"><div className="journey"><div><h2>Ready to start your data journey?</h2><p>Join hundreds of graduates who turned their career around with the right guidance.<br />Our next batch starts soon — let&apos;s talk about your goals.</p><small>Free 30-minute career counselling session. No commitment required.</small></div><div className="journey-actions"><Button href="/contact">Talk to a Mentor</Button><Button href="/courses" secondary>Browse Courses</Button></div></div></section> }
export function ContactInfo() { const data = [[Phone,'PHONE','+91 8668962548'],[Mail,'EMAIL','futureedgedata.institute@gmail.com'],[MapPin,'LOCATION','Future Edge Data Institute, solapur, Maharashtra'],[Clock3,'OFFICE HOURS','Mon – Sat, 9 AM – 7 PM IST']]; return <div className="info-list">{data.map(([Icon,title,value]) => <div className="info-card" key={title as string}><span className="icon-box"><Icon /></span><div><small>{title as string}</small><strong>{value as string}</strong></div></div>)}</div> }
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const form = event.currentTarget
    const values = new FormData(form)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
    const { error } = await supabase.from('contact_submissions').insert({
      full_name: String(values.get('full_name') || '').trim(),
      email: String(values.get('email') || '').trim(),
      phone: String(values.get('phone') || '').trim() || null,
      interest: String(values.get('interest') || '').trim() || null,
      message: String(values.get('message') || '').trim() || null,
    })

    setIsSubmitting(false)
    if (error) {
      setStatus('error')
      return
    }

    form.reset()
    setStatus('success')
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <h2>Send us a message</h2>
    <p>Fill in the form and we&apos;ll get back to you within 24 hours.</p>
    <div className="form-grid">
      <label>Full name *<input name="full_name" placeholder="Your full name" required /></label>
      <label>Email address *<input name="email" type="email" placeholder="you@example.com" required /></label>
      <label>Phone number<input name="phone" placeholder="+91 98765 43210" /></label>
      <label>I&apos;m interested in<select name="interest" defaultValue=""><option value="" disabled>Select a program...</option><option>Data Science &amp; Analytics</option><option>Python for Data Analytics</option></select></label>
    </div>
    <label>Message<textarea name="message" placeholder="Tell us a bit about your background and what you&apos;re hoping to achieve." rows={4} /></label>
    {status === 'success' && <p role="status">Thanks — your message has been received.</p>}
    {status === 'error' && <p role="alert">We couldn&apos;t send your message. Please try again.</p>}
    <button className="button button-primary submit" disabled={isSubmitting}><Send size={18} /> {isSubmitting ? 'Sending...' : 'Send message'}</button>
  </form>
}
export function FAQ() { const [open, setOpen] = useState<number | null>(null); const questions = ['Do I need prior coding experience to join?','Are classes online or offline?','What does the placement support look like?','When does the next batch start?','Is there an EMI or instalment option?']; return <section className="faq-band"><div className="narrow"><Label>Common questions</Label><h2>Things people usually ask us.</h2>{questions.map((q,i) => <div className={`faq-row ${open === i ? 'open' : ''}`} key={q}><button onClick={() => setOpen(open === i ? null : i)}>{q}<ChevronDown size={18} /></button>{open === i && <p>We&apos;re happy to guide you. Talk to our counsellors and we&apos;ll help you understand the right next step.</p>}</div>)}</div></section> }
export function BatchSchedule() { const batches = [['1 September 2026','Data Science & Analytics (6 months)','12 seats remaining','Open'],['15 September 2026','Python for Data Analytics (8 weeks)','8 seats remaining','Open'],['1 October 2026','Power BI & Tableau (6 weeks)','Limited seats','Filling fast'],['Every 4–6 weeks','SQL & Machine Learning specializations','Flexible cohorts','Rolling intake']]; return <section className="aqua-band"><div className="container"><Label>Upcoming batches</Label><h2>Upcoming batch schedule</h2><div className="batch-grid">{batches.map(([date,name,seats,status]) => <article className="batch-card" key={date}><small><CalendarDays /> {status === 'Rolling intake' ? 'ROLLING INTAKE' : 'NEXT START'}</small><h3>{date}</h3><strong>{name}</strong><p><Users size={15} /> {seats}</p><span className={status === 'Filling fast' ? 'status warm' : 'status'}>{status}</span></article>)}</div></div></section> }
