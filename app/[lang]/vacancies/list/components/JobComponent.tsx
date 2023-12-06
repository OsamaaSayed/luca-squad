'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
type JobComponentProps = {
  id: string;
  title: string;
  location: string;
  discover: string;
};
const JobComponent = ({ id, title, location, discover }: JobComponentProps) => {
  const router = useRouter();
  return (
    <div className='mt-5 flex flex-col justify-between bg-white p-10 md:flex-row'>
      <div>
        <h1 className='text-2xl text-black'>{title}</h1>
        <p className='text[#7A7A7A] text-lg'>{location}</p>
      </div>
      <button
        className='bg-main  h-10 bg-ls-primary text-white md:px-12 md:py-0'
        onClick={() => router.push(`/vacancies/${id}`)}
      >
        {discover}
      </button>
    </div>
  );
};

export default JobComponent;
