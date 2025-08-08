import '#/styles/globals.css';

import db from '#/lib/db';
import Byline from '#/ui/byline';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Garrett Gibson - Personal Site',
    template: '%s | Garrett Gibson',
  },
  metadataBase: new URL('https://garrettgibson.dev'),
  description: 'Portfolio site for Garrett Gibson – full-stack developer, software engineer, and technology enthusiast.',
  openGraph: {
    title: 'Garrett Gibson',
    description: 'Explore the personal site and projects of Garrett Gibson, a full-stack developer and computer science student.',
    url: 'https://garrettgibson.dev',
    siteName: 'Garrett Gibson',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const demos = db.demo.findMany();
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body
        className={`overflow-y-scroll bg-gray-950 font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="min-h-screen overflow-y-scroll font-sans antialiased"
          style={{
            backgroundImage: 'url("/images/homepageBackground.jpg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black/50 lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-b-0 lg:border-gray-800">
            <GlobalNav items={demos} />
          </div>

          <div className="lg:pl-72">
            <div className="mx-auto mt-12 mb-24 max-w-4xl -space-y-[1px] lg:px-8 lg:py-8">
              {children}

              <Byline />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
