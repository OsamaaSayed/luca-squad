import { Locale } from '@/i18n.config';
import Image from 'next/image';
import { getDictionary } from '@/lib/dictionary';

const Article = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang);

  return (
    <>
      <div className='flex flex-1 flex-col gap-6 bg-white p-8 text-ls-primary '>
        <p className='text-3xl font-bold capitalize'>{page.contact.subTitle}</p>
        <p className='text-sm normal-case'>
          {page.contact.subTitleDescription}
        </p>
      </div>
      <Image
        src='/images/contact/customer-service.jpg'
        width={548}
        height={201}
        alt='customer service'
        className='h-40 w-full object-cover sm:h-52'
      />
    </>
  );
};
export default Article;
