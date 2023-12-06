import Link from 'next/link';

type JobComponentProps = {
  id: string;
  title: string;
  location: string;
  discover: string;
  lang: string;
};
const JobComponent = ({
  id,
  title,
  location,
  discover,
  lang,
}: JobComponentProps) => {
  return (
    <div className='mt-5 flex flex-col justify-between bg-white p-10 xs:flex-row'>
      <div>
        <h1 className='text-2xl text-black'>{title}</h1>
        <p className='text[#7A7A7A] text-lg'>{location}</p>
      </div>
      <Link
        className='bg-main h-10 bg-ls-primary text-white px-10 py-2.5 text-center max-xs:mt-3 block'
        href={`/${lang}/vacancies/${id}`}
      >
        {discover}
      </Link>
    </div>
  );
};

export default JobComponent;
