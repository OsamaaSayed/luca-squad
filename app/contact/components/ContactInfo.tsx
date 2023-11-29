import Image from 'next/image';

import ContactMethod from './ContactMethod';

const ContactInfo = () => {
  return (
    <div className='flex flex-1 flex-col gap-8  p-8 font-bold capitalize text-white'>
      <p>
        We will be happy to welcome you and provide you with all necessary
        information.
      </p>
      <p>Alternatively, </p>
      <p>you can contact us through the following methods:</p>

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
          You can find us at our office located at Via della Guastalla, 11,
          Milan.
        </span>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.4389647765806!2d9.198650599999999!3d45.46096059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a695403b33%3A0x7e202a523705c2d7!2sVia%20della%20Guastalla%2C%2011%2C%2020122%20Milano%20MI%2C%20Italy!5e0!3m2!1sen!2seg!4v1700747858210!5m2!1sen!2seg'
        height='170'
        style={{ border: 0 }}
        className='h-48'
      ></iframe>
    </div>
  );
};

export default ContactInfo;
