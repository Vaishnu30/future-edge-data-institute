import { Analytics } from '@vercel/analytics/next'
import { Poppins } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['400','500','600','700','800'] })

export const metadata: Metadata = { title: 'Future Edge Data Institute', description: 'Industry-aligned data science curriculum for fresh graduates ready to get hired.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#ffffff' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={poppins.variable}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
