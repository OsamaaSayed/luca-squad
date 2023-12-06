import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

import Header from '@/components/shared/Header';
import FormSubmit from './components/FormSubmit';

const page = async ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) => {
  const { page } = await getDictionary(lang);
  console.log(page);
  return (
    <section>
      <Header
        bgImage='/images/contact/contact-bg.jpg'
        title={page.vacancies.title}
      />
      <article className='my-10 px-10'>
        <FormSubmit
          lang={lang}
          id={id}
          applyFormText={page.vacancyDetails.applyForm}
        />
      </article>
    </section>
  );
};

export default page;
