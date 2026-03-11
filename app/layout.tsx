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
  title: 'DevOps Engineer Portfolio | Building Reliable Infrastructure',
  description: 'Experienced DevOps Engineer specializing in CI/CD pipelines, Kubernetes, Terraform, and cloud infrastructure. Building reliable infrastructure, one pipeline at a time.',
  keywords: ['DevOps', 'Kubernetes', 'Docker', 'Terraform', 'AWS', 'CI/CD', 'Infrastructure as Code', 'Cloud Engineer'],
  authors: [{ name: 'DevOps Engineer' }],
  openGraph: {
    title: 'DevOps Engineer Portfolio',
    description: 'Building reliable infrastructure, one pipeline at a time',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps Engineer Portfolio',
    description: 'Building reliable infrastructure, one pipeline at a time',
  },
}

export const viewport: Viewport = {
  themeColor: '#0891b2',
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
