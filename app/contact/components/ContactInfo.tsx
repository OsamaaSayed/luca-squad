import Image from 'next/image';

import ContactMethod from './ContactMethod';

const ContactInfo = () => {
  return (
    <div className='flex flex-1 flex-col gap-8 bg-ls-primary p-8 font-bold capitalize text-white'>
      <p>
        We will be happy to welcome you and provide you with all necessary
        information.
      </p>
      <p>Alternatively, </p>
      <p>you can contact us through the following methods:</p>

      <div className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
        <ContactMethod
          icon='/svg/contact/phone.svg'
          text='+39 377952237'
          href='tel:+39 377952237'
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
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.7552793823856!2d31.31454239999998!3d30.09945490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815117dea963d%3A0x8d6bf435e57e2ef6!2sSB%20technology!5e0!3m2!1sen!2sus!4v1583760510840!5m2!1sen!2sus'
        height='170'
        style={{ border: 0 }}
        className='h-full'
      ></iframe>
    </div>
  );
};

export default ContactInfo;
