'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { i18n } from '@/i18n.config';
import { navLinks } from '@/constants';

const Navbar = () => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  
  return (
    <nav className='absolute left-0 right-0 top-10 text-white'>
      <ul className='flex items-center justify-center gap-4'>
        {navLinks.map((item) => {
          const isActive = pathName === item.path;

          return (
            <li
              key={item.label}
              className={`cursor-pointer ${isActive ? 'border-b-2' : ''}`}
            >
              <Link
                href={item.path}
                className={``}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                className='rounded-md border bg-black px-3 py-2 text-white'
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
