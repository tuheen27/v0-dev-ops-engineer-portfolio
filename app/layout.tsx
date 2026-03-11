import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: 'Tuheen | DevOps Engineer Portfolio',
  description: 'DevOps Engineer with 5+ years of experience designing CI/CD pipelines, cloud infrastructure, and container orchestration. Building reliable infrastructure, one pipeline at a time.',
  keywords: ['DevOps', 'Kubernetes', 'Docker', 'Terraform', 'AWS', 'CI/CD', 'Infrastructure as Code', 'Cloud Engineer', 'Tuheen'],
  authors: [{ name: 'Tuheen' }],
  openGraph: {
    title: 'Tuheen | DevOps Engineer',
    description: 'Building reliable infrastructure, one pipeline at a time',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuheen | DevOps Engineer',
    description: 'Building reliable infrastructure, one pipeline at a time',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
