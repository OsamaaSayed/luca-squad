'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

type NavLinkType = {
  label: string;
  path: string;
};

const Navbar = ({ lang }: { lang: Locale }) => {
  const pathName = usePathname();
  const [navigationLinks, setNavigationLinks] = useState<any>(null);

  const getNavData = async () => {
    try {
      const { navigationLinks } = await getDictionary(lang);
      setNavigationLinks(navigationLinks);
    } catch (error) {
      console.log(error);
    }
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  useEffect(() => {
    getNavData();
  }, []);

  return (
    <nav className='absolute left-0 right-0 top-10 text-white'>
      <ul className='flex items-center justify-center gap-2 xs:gap-4'>
        {navigationLinks?.map((item: NavLinkType, index: number) => {
          console.log(pathName, `/${lang}` + item.path);
          const isActive = pathName === `/${lang}` + item.path;

          return (
            <li
              key={item.label}
              className={`cursor-pointer max-sm:text-sm ${
                isActive ? 'border-b-2' : ''
              } ${index == 0 ? 'ml-auto' : ''}`}
            >
              <Link href={`/${lang}/${item.path}`}>{item.label}</Link>
            </li>
          );
        })}

        <li className='ml-auto mr-2'>
          <Link
            href={redirectedPathName(lang == 'en' ? 'it' : 'en')}
            className=' rounded-md border px-3 py-2 text-white  max-sm:text-sm'
          >
            {lang}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
