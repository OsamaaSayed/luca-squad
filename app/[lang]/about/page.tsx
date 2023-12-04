import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/shared/Header';
import AboutSection from './components/AboutSection';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

export const metadata: Metadata = {
  title: 'Luca Squad | About Us',
  description:
    'A state-of-the-art construction company with an established reputation for excellence and integrity. Founded in Milan, Italy, we are committed to the construction industry with an emphasis on precision, innovation and customer satisfaction. Every project we undertake reflects our dedication to detail and quality, while our decades of experience enable us to successfully tackle a wide range of projects, from luxury residential complexes to commercial renovations.',
};

const About = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);
  return (
    <>
      <Header
        bgImage='/images/about/about-bg.jpg'
        title={page.about.title}
      />
      <section className='container relative mx-auto py-14'>
        <div className='flex w-full flex-col gap-9  lg:flex-row'>
          <Image
            src='/images/about/about-section.jpg'
            width={711}
            height={448}
            alt='about section'
            className='hidden w-full flex-1 lg:block'
          />
          <AboutSection lang={lang} />
          <Image
            src='/images/about/about-section.jpg'
            width={711}
            height={448}
            alt='about section'
            className=' block w-full flex-1 lg:hidden'
          />
        </div>
        <p className='mt-8 font-medium'>{page.about.secondParagraph}</p>
      </section>
    </>
  );
};

export default About;
