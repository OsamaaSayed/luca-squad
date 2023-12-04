import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import JoinDescription from './JoinDescription';

type Article = {
  title: string;
  description: string;
  link: string;
};

type JoinSectionProps = {
  articlesList: Article[];
  subTitleP1: string;
  subTitleP2: string;
};

const JoinSection = ({
  articlesList,
  subTitleP1,
  subTitleP2,
}: JoinSectionProps) => {
  return (
    <section className='container mx-auto flex flex-col justify-center gap-12 py-14 xl:flex-row '>
      <div className='flex flex-col gap-8'>
        <SectionTitle
          primaryText={subTitleP1}
          secondaryText={subTitleP2}
        />
        {articlesList?.map((article) => (
          <JoinDescription
            title={article.title}
            description={article.description}
            link={article.link}
            key={article.title}
          />
        ))}
      </div>
      <Image
        src='/images/vacancies/join.jpg'
        width={591}
        height={652}
        alt='join us'
        className='object-contain'
      />
    </section>
  );
};

export default JoinSection;
