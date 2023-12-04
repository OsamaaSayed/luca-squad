import Header from '@/components/shared/Header';
import { getDictionary } from '@/lib/dictionary';
import React from 'react';
import { Locale } from '@/i18n.config';
import toast from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormSubmit from './components/FormSubmit';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);

  return (
    <section>
      <Header
        bgImage='/images/contact/contact-bg.jpg'
        title={page.vacancies.title}
      />
      <article className='my-10 px-10'>
        <FormSubmit lang={lang} />
      </article>
    </section>
  );
};

export default page;
