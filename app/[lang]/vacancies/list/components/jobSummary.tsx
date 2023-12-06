import Link from 'next/link';
import JobSummaryField from './JobSummaryField';

const JobSummary = ({ id, lang, vacancyDetails, jobSummaryText }: any) => {
  const dateMaping = (date: string) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'short' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <section className='bg-white p-7'>
      <h1 className='mb-10 text-xl'>{jobSummaryText.title}</h1>
      <JobSummaryField
        imageSource='/svg/location.svg'
        title={jobSummaryText.location}
        value={
          lang === 'en'
            ? vacancyDetails?.result?.locationEn
            : vacancyDetails?.result?.locationIt
        }
      />

      <JobSummaryField
        imageSource='/svg/job.svg'
        title={jobSummaryText.jobType}
        value={vacancyDetails.result.jobType}
      />

      <JobSummaryField
        imageSource='/svg/date.svg'
        title={jobSummaryText.date}
        value={dateMaping(vacancyDetails.result.datePosted)}
      />

      <JobSummaryField
        imageSource='/svg/book.svg'
        title={jobSummaryText.experience}
        value={
          lang === 'en'
            ? vacancyDetails.result.experienceEn
            : vacancyDetails.result.experienceIt
        }
      />

      <JobSummaryField
        imageSource='/svg/time.svg'
        title={jobSummaryText.workingHours}
        value={vacancyDetails.result.workingHours}
      />
      <JobSummaryField
        imageSource='/svg/calender.svg'
        title={jobSummaryText.workingDays}
        value={vacancyDetails.result.workingDays}
      />

      <JobSummaryField
        imageSource='/svg/chair.svg'
        title={jobSummaryText.vacancy}
        value={`${jobSummaryText.NoOfVacancies} ${vacancyDetails.result.numberOfVacancies}`}
      />

      <Link
        className='mt-5 block w-full bg-ls-primary py-3 text-center uppercase text-white'
        href={`/${lang}/vacancies/apply/${id}`}
        role='button'
      >
        {jobSummaryText.apply}
      </Link>
    </section>
  );
};

export default JobSummary;
