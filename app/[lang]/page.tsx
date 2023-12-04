import Image from 'next/image';

import ServiceBox from './components/ServiceBox';
import ContactBox from './components/ContactBox';
import SectionTitle from '@/components/shared/SectionTitle';
import Slider from './components/Slider';
import Subscribe from './components/Subscribe';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <main>
      <section
        style={{ backgroundImage: `url('/images/home/hero.jpg')` }}
        className='bg-main min-h-screen bg-cover bg-center bg-no-repeat'
      >
        <div className='flex min-h-screen items-center justify-center'>
          <div className='container mx-auto'>
            <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
              <Image
                src='/svg/logo.svg'
                alt='logo'
                width={110}
                height={122}
                priority
                className='delay-500 duration-500 ease-in-out animate-in fade-in zoom-in fill-mode-both'
              />
              <Image
                src='/svg/v-line.svg'
                alt='line'
                width={2}
                height={80}
                className='hidden h-20 w-1 delay-1000 duration-500 ease-in-out animate-in fade-in-0 zoom-in-0 fill-mode-both md:inline-block'
              />
              <Image
                src='svg/luca.svg'
                alt='luca'
                width={260}
                height={80}
                className='delay-1500 duration-500 ease-in-out animate-in fade-in slide-in-from-left fill-mode-both'
              />
              <Image
                src='svg/squad.svg'
                alt='squad'
                width={325}
                height={100}
                className='delay-2000 duration-500 ease-in-out animate-in fade-in slide-in-from-left fill-mode-both'
              />
            </div>
            <div className='mt-3 text-center md:mt-0'>
              <p className='text-lg font-medium text-white delay-2500 duration-500 animate-in fade-in slide-in-from-left fill-mode-both'>
                {page.home.subTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto'>
          <div className='my-16 flex xs:justify-center lg:justify-start'>
            <SectionTitle
              primaryText={page.home.headingP1}
              secondaryText={page.home.headingP2}
            />
          </div>

          <div className='flex flex-wrap items-center gap-x-5 gap-y-6 xs:justify-center lg:justify-start'>
            {page.home.services.map((item) => (
              <ServiceBox
                key={item.title}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto my-16'>
          <Slider sliderItems={page.home.sliderItems} />
        </div>
      </section>

      <section>
        <div className='container mx-auto mb-32 mt-52'>
          <div className='flex flex-wrap items-center gap-6'>
            {page.home.contacts.map((item) => (
              <ContactBox
                key={item.title}
                item={item}
                href={item.href}
              />
            ))}

            {/* <Subscribe /> */}
          </div>
        </div>
      </section>
    </main>
  );
}
