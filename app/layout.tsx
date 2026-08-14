import './globals.css';
import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

export const metadata = {
  title: 'Your Name | Portfolio',
  description: 'IT Support | Network Engineering | Software Engineering portfolio',
  openGraph: {
    title: 'Your Name | Portfolio',
    description: 'IT Support | Network Engineering | Software Engineering portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${sourceSerif4.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
