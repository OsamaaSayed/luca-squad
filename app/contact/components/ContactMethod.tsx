import Image from 'next/image';

type ContactMethodProps = {
  icon: string;
  text: string;
  href: string;
};
const ContactMethod = ({ icon, text, href }: ContactMethodProps) => {
  return (
    <div className='flex items-center gap-2.5 font-medium'>
      <Image
        src={icon}
        width={18}
        height={18}
        alt={icon}
      />
      <a
        className='normal-case'
        href={href}
      >
        {text}
      </a>
    </div>
  );
};

export default ContactMethod;
