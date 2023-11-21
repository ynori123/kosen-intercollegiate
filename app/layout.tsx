import './globals.css';
import Header from '@/components/Header';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '船舶就活',
  description: '船舶業界に就職しようとしている学生のためのサイトです',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
