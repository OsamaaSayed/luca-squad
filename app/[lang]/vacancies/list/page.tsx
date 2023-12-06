import Header from '@/components/shared/Header';
import React from 'react';
import JobComponent from './components/JobComponent';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

async function getVacancies() {
  const res = await fetch(
    'https://sbtechnology-001-site85.atempurl.com/api/Vacancies/GetAllVacancies',
    { cache: 'no-store' },
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const vacancies = await getVacancies();
  return (
    <>
      <Header
        bgImage='/images/vacancies/vacancies-bg.jpg'
        title={page.vacanciesList.title}
      ></Header>
      <section className='container mx-auto py-10 '>
        {vacancies?.result?.map((item: any, index: number) => {
          return (
            <JobComponent
              id={item?.id}
              key={index}
              title={item?.titleEn}
              location={item?.location}
              discover={page.vacanciesList.discover}
            />
          );
        })}
      </section>
    </>
  );
};

export default page;
