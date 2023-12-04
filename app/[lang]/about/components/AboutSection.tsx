import SectionTitle from '@/components/shared/SectionTitle';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

const AboutSection = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang);
  return (
    <div className='flex-1'>
      <SectionTitle
        primaryText={page.about.subTitleP1}
        secondaryText={page.about.subTitleP2}
      />
      <p className='mt-10 bg-[#272727] p-5 text-[18px] font-medium text-white xl:mt-3 xl:w-[610px] xl:-translate-x-24'>
        {page.about.firstParagraph}
      </p>
    </div>
  );
};

export default AboutSection;
