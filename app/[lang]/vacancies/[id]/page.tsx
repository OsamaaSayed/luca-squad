import Header from '@/components/shared/Header';
import JobSummery from '../list/components/jobSummary';

import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

async function getVacancyDetails(id: string) {
  const res = await fetch(
    `http://sbtechnology-001-site85.atempurl.com/api/Vacancies/GetVacancyDetailsById?vacancyId=${id}`,
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  const vacancyDetails = await getVacancyDetails(id);
  const { page } = await getDictionary(lang);
  
  return (
    <section className='w-full'>
      <Header
        bgImage='/images/vacancies/vacancies-bg.jpg'
        title={page.vacancyDetails.title}
      ></Header>

      <main className='  grid grid-cols-1 px-10 py-10 md:grid-cols-12'>
        <article className=' col-span-9 '>
          <main>
            <h1 className='text-2xl text-black'>
              {lang === 'en'
                ? vacancyDetails.result?.titleEn
                : vacancyDetails.result?.titleIt}
            </h1>
            <p className='my-4 text-lg'>
              {lang === 'en'
                ? page.vacancyDetails.subtitle
                : page.vacancyDetails.subtitle}
            </p>
            <div
              className='text[#7A7A7A] text-lg '
              dangerouslySetInnerHTML={{
                __html:
                  lang === 'en'
                    ? vacancyDetails.result?.descriptionEn
                    : vacancyDetails.result?.descriptionIt,
              }}
            ></div>
          </main>
        </article>
        <article className=' col-span-3'>
          <JobSummery
            vacancyDetails={vacancyDetails}
            lang={lang}
            id={id}
            jobSummaryText={page.vacancyDetails.jobSummary}
          />
        </article>
      </main>
    </section>
  );
}
