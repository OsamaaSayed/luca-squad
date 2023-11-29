import { Metadata } from 'next';

import Header from '@/components/shared/Header';
import ContactInfo from './components/ContactInfo';
import Article from './components/Article';
import EmailForm from './components/EmailForm';

export const metadata: Metadata = {
  title: 'Luca Squad | Contact Us',
  description:
    'We are happy to answer all your questions and discuss your construction needs.',
};

const ContactUs = () => {
  return (
    <>
      <Header
        bgImage='/images/contact/contact-bg.jpg'
        title='Contact Us'
      />
      <section className='container mx-auto flex w-full flex-col  py-14 '>
        <Article />
        <div className=' bg-ls-primary grid grid-cols-1 md:grid-cols-2'>
          <EmailForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
