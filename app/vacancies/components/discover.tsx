'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

function Discover() {
  const router = useRouter();
  return (
    <div className=' px-28 py-10'>
      <button
        className='bg-main bg-ls-primary px-10 py-2 text-xl text-white'
        onClick={() => router.push('/vacancies/list')}
      >
        Discover Now
      </button>
    </div>
  );
}

export default Discover;
