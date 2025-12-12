import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { David_Libre, Inconsolata } from 'next/font/google';

import Layout from '@/components/Layout';
import { generateMetadata as generateRootMetadata } from '@/lib/metadata';
import './globals.css';

const davidLibre = David_Libre({
  variable: '--font-david-libre',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  subsets: ['latin'],
});

export const metadata = generateRootMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
      )}
      <body className={`${davidLibre.variable} ${inconsolata.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
