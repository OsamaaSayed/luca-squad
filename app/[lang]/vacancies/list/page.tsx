import Header from '@/components/shared/Header';
import JobComponent from './components/JobComponent';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

async function getVacancies() {
  const res = await fetch(
    'http://sbtechnology-001-site91.atempurl.com/api/Vacancies/GetAllVacancies',
    { cache: 'no-store' },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const vacancies = await getVacancies();
  const { page } = await getDictionary(lang);

  return (
    <>
      <Header
        bgImage='/images/vacancies/vacancies-bg.jpg'
        title={page?.vacanciesList?.title}
      />

      <section className='container mx-auto py-10 '>
        {vacancies?.result?.map((item: any, index: number) => {
          return (
            <JobComponent
              id={item?.id}
              key={index}
              title={item?.titleEn}
              location={item?.locationEn}
              discover={page?.vacanciesList?.discover}
              lang={lang}
            />
          );
        })}
      </section>
    </>
  );
};

export default page;
