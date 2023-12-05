'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
type Props = {
  id: string;
  title: string;
  location: string;
};
const JobComponent: React.FC<Props> = (props) => {
  const router = useRouter();
  return (
    <div className='mt-5 flex flex-col justify-between bg-white p-10 md:flex-row'>
      <div>
        <h1 className='text-2xl text-black'>{props.title}</h1>
        <p className='text[#7A7A7A] text-lg'>{props.location}</p>
      </div>
      <button
        className='bg-main  h-10 bg-ls-primary text-white md:px-12 md:py-0'
        onClick={() => router.push(`/vacancies/${props.id}`)}
        // onClick={() => {
        //   console.log('id', props.id);
        // }}
      >
        Discover Now
      </button>
    </div>
  );
};

export default JobComponent;
