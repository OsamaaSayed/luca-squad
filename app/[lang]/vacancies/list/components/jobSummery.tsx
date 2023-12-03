import React from 'react';
import JobInfo from './jobInfo';

const icons = [
  '/svg/location.svg',
  '/svg/job.svg',
  '/svg/date.svg',
  '/svg/book.svg',
  '/svg/time.svg',
  '/svg/calender.svg',
  '/svg/chair.svg',
];

const JobSummery = () => {
  return (
    <section className='bg-white p-7'>
      <h1 className='mb-10 text-xl'>Job Summery</h1>
      <div className=''>
        {icons.map((item, index) => {
          return (
            <JobInfo
              key={index}
              title={`title`}
              description={`description`}
              image={item}
            />
          );
        })}
      </div>
      <div>
        {' '}
        <button className='mt-5 w-full bg-ls-primary py-3 uppercase text-white '>
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default JobSummery;
