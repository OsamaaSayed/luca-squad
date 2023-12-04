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
          <main>
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
          </main>

          <article className='mt-5'>
            <h1 className='text-xl text-black'>What You Will Be Doing</h1>
            <p>
              As a Financial Inclusion Sales Agent, your responsibilities
              include:
            </p>
            <ul>
              <li>Conducting customer outreach in underserved areas.</li>
              <li>
                Promoting and explaining financial products tailored to customer
                needs.
              </li>
              <li>
                Assisting clients in completing applications and ensuring a
                smooth process.
              </li>
              <li>Building and maintaining positive customer relationships.</li>
              <li>Achieving sales targets through effective strategies.</li>
              <li>
                Conducting training sessions to enhance financial literacy in
                the community.
              </li>
            </ul>
          </article>

          <article className='mt-5'>
            <h1 className='text-xl text-black'>Educational Requirement:</h1>
            <ul>
              <li>High school diploma or equivalent.</li>
              <li>
                Additional education in finance or related fields is
                advantageous.
              </li>
            </ul>
          </article>

          <article className='mt-5'>
            <h1 className='text-xl text-black'>Working Hours</h1>
            <ul>
              <li>9 AM - 6 PM</li>
            </ul>
          </article>
          <article className='mt-5'>
            <h1 className='text-xl text-black'>Working Days</h1>
            <ul>
              <li>
                Five days a week, with flexibility based on outreach schedules
                and community needs.
              </li>
            </ul>
          </article>

          <article className='mt-5'>
            <h1 className='text-xl text-black'>Perks & Benefits You'll Get:</h1>
            <ul>
              <li>Competitive salary with a commission structure.</li>
              <li>Opportunities for career growth and continuous learning.</li>
              <li>Contribution to a meaningful social cause.</li>
              <li>
                Compliance with regulatory requirements and adherence to company
                policies.
              </li>
              <li>
                A positive and collaborative work environment fostering personal
                and professional development.
              </li>
            </ul>
          </article>
        </article>
        <article className=' col-span-3'>
          <JobSummery />
        </article>
      </main>
    </section>
  );
}
