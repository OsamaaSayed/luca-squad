import Header from '@/components/shared/Header';
import React from 'react';
import JobComponent from './components/JobComponent';

const page = () => {
  return (
    <>
      <Header
        bgImage='/images/vacancies/vacancies-bg.jpg'
        title='Vacancies'
      ></Header>
      <section className='container mx-auto   py-10 '>
        {[1, 2, 4, 5, 6, 7].map((_, index) => {
          return (
            <JobComponent
              id={`${index + 1}`}
              key={index}
              title={`title`}
              location={`location`}
            />
          );
        })}
      </section>
    </>
  );
};

export default page;
