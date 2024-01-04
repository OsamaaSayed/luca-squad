import { Metadata } from 'next';

import Header from '@/components/shared/Header';
import JoinSection from './components/JoinSection';
import Discover from './components/discover';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

export const metadata: Metadata = {
  title: 'Luca Squad | Vacancies',
  description:
    'if you are a motivated professional in the construction industry, Luca Squad is the perfect place for you. We offer a dynamic and challenging work environment where you can showcase your skills and grow your career. We are looking for talented individuals who share our passion for excellence and precision and who want to contribute meaningfully to high-profile construction projects. If you are interested in joining a team committed to delivering extraordinary projects and exceeding expectations, please send us your resume and cover letter to info@lucasquad.it',
};

const Vacancies = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { page } = await getDictionary(lang);

  return (
    <>
      <Header
        bgImage='/images/vacancies/vacancies-bg.jpg'
        title={page?.vacancies?.title}
      ></Header>

      <JoinSection
        articlesList={page?.vacancies?.articles}
        subTitleP1={page?.vacancies?.subTitleP1}
        subTitleP2={page?.vacancies?.subTitleP2}
      />
      
      <Discover
        lang={lang}
        discover={page?.vacancies?.discover}
      />
    </>
  );
};

export default Vacancies;
