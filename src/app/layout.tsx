import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import StoreProvider from '@app/providers/StoreProvider';
import ReactQueryProvider from '@app/providers/ReactQueryProvider';
import Header from '@/widgets/Header';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Movie Explorer',
  description: 'Search and explore movies',
  icons: {
    icon: '/coffee-icon.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <ReactQueryProvider>
            <div>
              <Header />
              {children}
            </div>
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
