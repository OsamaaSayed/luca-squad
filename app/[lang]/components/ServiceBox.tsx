import Image from 'next/image';

import { Item } from '@/types/global';

type ServiceBoxProps = {
  item: Item;
};

const ServiceBox = ({ item }: ServiceBoxProps) => {
  return (
    <div className='h-full max-w-[400px] xs:h-52'>
      <div className='mb-4 flex items-center gap-6'>
        <Image
          src={item.url}
          alt='icon'
          width={32}
          height={32}
        />
        <h3 className='text-lg font-semibold'>{item.title}</h3>
      </div>

      <p>{item.body}</p>
    </div>
  );
};

export default ServiceBox;
