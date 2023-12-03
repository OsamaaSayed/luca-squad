import Header from '@/components/shared/Header';
import JobSummery from '../list/components/jobSummery';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <section className=' w-full '>
      <Header
        bgImage='/images/vacancies/vacancies-bg.jpg'
        title='Vacancies'
      ></Header>

      <main className='  grid grid-cols-12 px-10 py-10'>
        <article className=' col-span-9 '>
          <h1 className='text-2xl text-black'>
            Financial Inclusion Sales Agent
          </h1>
          <p className='my-4  text-lg'>Who Are We Looking For</p>
          <p className='text[#7A7A7A] text-lg '>
            We are seeking dynamic individuals who are passionate about
            financial inclusion and have a drive to make a positive impact on
            underserved communities. The ideal candidate is someone with a
            background in sales, excellent communication skills, and a
            commitment to promoting accessible financial services.
          </p>
        </article>
        <article className=' col-span-3'>
          <JobSummery />
        </article>
      </main>
    </section>
  );
}
