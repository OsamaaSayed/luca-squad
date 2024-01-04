'use client';
import Link from 'next/link';

import { Locale } from '@/i18n.config';

type DiscoverProps = {
  discover: string;
  lang: Locale;
};

function Discover({ discover, lang }: DiscoverProps) {
  return (
    <div className=' px-10 pb-20 md:px-28'>
      <Link
        href={`/${lang}/vacancies/list`}
        className='bg-main bg-ls-primary px-10 py-2 text-xl text-white'
      >
        {discover}
      </Link>
    </div>
  );
}

export default Discover;
