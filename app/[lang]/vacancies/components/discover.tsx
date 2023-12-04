'use client';

import React from 'react';
import { Locale } from '@/i18n.config';
import Link from 'next/link';

type DiscoverProps = {
  discover: string;
  lang: Locale;
};

function Discover({ discover, lang }: DiscoverProps) {
  return (
    <div className=' px-28 py-10'>
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
