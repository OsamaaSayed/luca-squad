import React from 'react';
import JobInfo from './jobInfo';
import { useRouter } from 'next/navigation';

const icons = [
  '/svg/location.svg',
  '/svg/job.svg',
  '/svg/date.svg',
  '/svg/book.svg',
  '/svg/time.svg',
  '/svg/calender.svg',
  '/svg/chair.svg',
];

const JobSummery = (props: any) => {
  console.log('props', props);

  const router = useRouter();

  const dateMaping = (date: string) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'short' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <section className='bg-white p-7'>
      <h1 className='mb-10 text-xl'>Job Summery</h1>
      <div className=''>
        {/* {icons.map((item, index) => {
          return (
            <JobInfo
              key={index}
              title={`title`}
              description={`description`}
              image={item}
            />
          );
        })} */}
        <div className='mt-8 flex items-center gap-3'>
          <img
            src={'/svg/location.svg'}
            alt=''
            className='h-5 w-5'
          />
          <div>
            <p className='text-[#7A7A7A]'>Location</p>
            <p>{props.vacancyDetails.result.location}</p>
          </div>
        </div>
        <div className='mt-8 flex items-center gap-3'>
          <img
            src={'/svg/job.svg'}
            alt=''
            className='h-5 w-5'
          />
          <div>
            <p className='text-[#7A7A7A]'>Job Type</p>
            <p>{props.vacancyDetails.result.jobType}</p>
          </div>
        </div>

        <div className='mt-8 flex items-center gap-3'>
          <img
            src={'/svg/date.svg'}
            alt=''
            className='h-5 w-5'
          />
          <div>
            <p className='text-[#7A7A7A]'>Date posted</p>
            <p>{dateMaping(props.vacancyDetails.result.datePosted)}</p>
          </div>
        </div>

        <div className='mt-8 flex items-center gap-3'>
          <img
            src={'/svg/book.svg'}
            alt=''
            className='h-5 w-5'
          />
          <div>
            <p className='text-[#7A7A7A]'>Experience</p>
            <p>{props.vacancyDetails.result.experience}</p>
          </div>
        </div>

        <div className='mt-8 flex items-center gap-3'>
          <img
            src={'/svg/time.svg'}
            alt=''
            className='h-5 w-5'
          />
          <div>
            <p className='text-[#7A7A7A]'>Working Hours</p>
            <p>{props.vacancyDetails.result.workingHours}</p>
          </div>
        </div>

        <div className='mt-8 flex items-center gap-3'>
          <img
            src={'/svg/calender.svg'}
            alt=''
            className='h-5 w-5'
          />
          <div>
            <p className='text-[#7A7A7A]'>Working Days</p>
            <p>{props.vacancyDetails.result.workingDays}</p>
          </div>
        </div>

        <div className='mt-8 flex items-center gap-3'>
          <img
            src={'/svg/chair.svg'}
            alt=''
            className='h-5 w-5'
          />
          <div>
            <p className='text-[#7A7A7A]'>Vacancy</p>
            <p>
              {' '}
              No.of Vacancies {props.vacancyDetails.result.numberOfVacancies}
            </p>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <button
          className='mt-5 w-full bg-ls-primary py-3 uppercase text-white '
          onClick={() => {
            router.push(`/vacancies/apply/${props.id}`);
          }}
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default JobSummery;
