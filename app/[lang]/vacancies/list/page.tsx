import Header from '@/components/shared/Header';
import React from 'react';
import JobComponent from './components/JobComponent';

async function getVacancies() {
  const res = await fetch(
    'http://sbtechnology-001-site85.atempurl.com/api/Vacancies/GetAllVacancies',
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const page = async () => {
  const vacancies = await getVacancies();
  return (
    <>
      <Header
        bgImage='/images/vacancies/vacancies-bg.jpg'
        title='Vacancies'
      ></Header>
      <section className='container mx-auto   py-10 '>
        {vacancies?.result?.map((item: any, index: number) => {
          return (
            <JobComponent
              id={item?.id}
              key={index}
              title={item?.titleEn}
              location={item?.location}
            />
          );
        })}
      </section>
    </>
  );
};

export default page;
