import type { Metadata } from 'next';

import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

import { Locale, i18n } from '@/i18n.config';

import { Toaster } from 'react-hot-toast';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Luca Squad',
  description:
    'A state-of-the-art construction company with an established reputation for excellence and integrity.',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <Navbar lang={params.lang} />
        {children}
        <Footer />
        <Toaster
          position='top-center'
          reverseOrder={false}
          containerStyle={{ flexWrap: 'nowrap' }}
        />
      </body>
    </html>
  );
}
