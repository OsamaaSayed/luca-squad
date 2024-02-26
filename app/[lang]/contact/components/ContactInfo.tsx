import Image from 'next/image';

import ContactMethod from './ContactMethod';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

const ContactInfo = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang);
  return (
    <div className='flex flex-1 flex-col gap-8  p-8 font-bold capitalize text-white'>
      <p>{page.contact.contactInfo.title}</p>
      <p>{page.contact.contactInfo.paragraph}</p>

      <div className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
        <ContactMethod
          icon='/svg/contact/phone.svg'
          text='+39 0297134070'
          href='tel:+390297134070'
        />

        <ContactMethod
          icon='/svg/contact/sms.svg'
          text='E-mail: info@lucasquad.it'
          href='mailto:info@lucasquad.it'
        />
      </div>

      <div className='flex gap-2.5 font-medium'>
        <Image
          src='/svg/contact/letter.svg'
          width={18}
          height={18}
          alt='letter'
        />
        <span>
        {page.contact.contactInfo.findUs}
        </span>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.418505462256!2d9.1997292!3d45.4613728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a6a08905b3%3A0xc5f4f926272bc499!2sPiazzetta%20Guastalla%2C%2011%2C%2020122%20Milano%20MI%2C%20Italy!5e0!3m2!1sen!2seg!4v1708937864520!5m2!1sen!2seg'
        height='170'
        style={{ border: 0 }}
        className='h-48'
      />
    </div>
  );
};

export default ContactInfo;
