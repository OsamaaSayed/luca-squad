import { Metadata } from 'next';

import Header from '@/components/shared/Header';
import ContactInfo from './components/ContactInfo';
import Article from './components/Article';
import EmailForm from './components/EmailForm';

import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';

export const metadata: Metadata = {
  title: 'Luca Squad | Contact Us',
  description:
    'We are happy to answer all your questions and discuss your construction needs.',
};

const ContactUs = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { page } = await getDictionary(lang);

  return (
    <>
      <Header
        bgImage='/images/contact/contact-bg.jpg'
        title={page.contact.title}
      />
      <section className='container mx-auto flex w-full flex-col  py-14 '>
        <Article lang={lang}/>
        <div className=' grid grid-cols-1 bg-ls-primary md:grid-cols-2'>
          <EmailForm lang={lang}/>
          <ContactInfo lang={lang} />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
