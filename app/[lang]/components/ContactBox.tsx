import Image from 'next/image';

import { Item } from '@/types/global';

type ContactBoxProps = {
  item: Item;
  href: string;
};

const ContactBox = ({ item, href }: ContactBoxProps) => {
  return (
    <div className='flex w-[285px] items-center'>
      <div className='p-4'>
        <Image
          src={item.url}
          alt='icon'
          width={36}
          height={36}
        />
      </div>

      <div className='border-l-2 border-ls-primary p-3'>
        <h4 className='text-lg font-semibold uppercase'>{item.title}</h4>
        <a
          href={href}
          target='_blank'
          className='hover:underline'
        >
          {item.body}
        </a>
      </div>
    </div>
  );
};

export default ContactBox;
